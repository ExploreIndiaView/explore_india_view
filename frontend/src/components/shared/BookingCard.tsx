"use client";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { API_URL } from "@/services/API";
import { useAuthStore } from "@/store/auth.store";
import axios from "axios";
import { CalendarIcon, Loader2, MinusCircle, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import InquirySection from "./InquirySection";
import ScratchCard from "./ScratchCard";

interface Props {
  PackageName: string;
  PackageDays: number;
  PackagePrice: number;
  PlaceList?: string[];
  AdventureList?: string[];
}

type BookingInput = {
  PackageName: string;
  PackageDays: number;
  PackagePrice: number;
  people: number;
  startDate: Date;
  PlaceList?: string[];
  hotel?: string;
  AdventureList?: string[];
};

function BookingCard({ props }: { props: Props }) {
  const { user, token } = useAuthStore();
  const [input, setInput] = useState<BookingInput>({
    PackageName: props.PackageName,
    PackageDays: props.PackageDays,
    PackagePrice: props.PackageDays * props.PackagePrice,
    people: 2,
    hotel: "",
    startDate: new Date(),
    PlaceList: props.PlaceList,
    AdventureList: props.AdventureList,
  });
  const [payOnline, setpayOnline] = useState(true);
  const [loading, setloading] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [cashbackAmount, setCashbackAmount] = useState<number | null>(null);
  const router = useRouter();

  // Loading any scripts
  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // loading checkout script
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  // change package price
  useEffect(() => {
    if (input.hotel === "3 Star") {
      setInput({
        ...input,
        PackagePrice:
          input.people * input.PackageDays * props.PackagePrice +
          input.people * input.PackageDays * 800 * 0.8,
      });
    } else if (input.hotel === "5 Star") {
      setInput({
        ...input,
        PackagePrice:
          input.people * input.PackageDays * props.PackagePrice +
          input.people * input.PackageDays * 1000 * 0.8,
      });
    } else {
      setInput({
        ...input,
        PackagePrice: input.people * input.PackageDays * props.PackagePrice,
      });
    }
  }, [input.PackageDays, input.people, input.hotel]);

  const handleSelectHotel = (value: string) => {
    if (input.hotel === value) {
      setInput({ ...input, hotel: "" }); // Unselect if already selected
    } else {
      setInput({ ...input, hotel: value });
    }
  };
  const handleBooking = async () => {
    try {
      setloading(true);

      if (payOnline) {
        const response = await axios.post(
          `${API_URL}/api/v1/booking/create-tour`,
          { ...input, startDate: input.startDate.toISOString() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.order;
        if (response.status === 400) throw new Error(response.data.message);

        const paymentObject = new (window as any).Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          order_id: data.id,
          ...data,
          handler: async function (response: any) {
            // verify payment
            const options2 = {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              PackageName: input.PackageName,
              PackageDays: input.PackageDays,
              PackagePrice: input.PackagePrice,
              people: input.people,
              startDate: input.startDate.toISOString(),
              PlaceList: input.PlaceList,
              AdventureList: input.AdventureList,
              hotel: input.hotel,
            };
            await axios
              .post(`${API_URL}/api/v1/booking/verify-payment`, options2, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((resp) => {
                if (resp.status === 400) throw new Error(resp.data.message);
                toast.success(resp.data.message || "Payment verified");

                // show scratch card
                setCashbackAmount(resp.data.CashbackAmount);
                setShowScratchCard(true);
              })
              .catch((error: any) => {
                toast.error(
                  (error.resp && error.resp.data.message) ||
                    "Something went wrong"
                );
              });
          },
        });

        paymentObject.open();
      } else {
        const response = await axios.post(
          `${API_URL}/api/v1/booking/create-tour-without-payment`,
          { ...input, startDate: input.startDate.toISOString() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 400) throw new Error(response.data.message);
        toast.success(
          response.data.message ||
            "Booking created successfully without payment"
        );
        router.push("/bookings");
      }
    } catch (error: any) {
      toast.error(
        (error.response && error.response.data.message) ||
          "Something went wrong"
      );
    } finally {
      setloading(false);
    }
  };

  const handleScratchComplete = () => {
    setTimeout(() => {
      setShowScratchCard(false);
      router.replace("/bookings");
    }, 3000);
  };

  return (
    <>
      {showScratchCard && cashbackAmount !== null ? (
        <ScratchCard
          cashback={cashbackAmount}
          onScratchComplete={handleScratchComplete}
        />
      ) : (
        <div className="w-full mt-5 border rounded-lg shadow-md p-4 md:sticky md:top-10">
          <h1 className="text-lg font-bold text-center font-serif my-2">
            {props.PackageName}
          </h1>
          <h1 className="text-lg mb-5 font-bold text-center font-serif border-b-2 my-2">
            {input.PackageDays} {input.PackageDays > 1 ? "days " : "day "}
          </h1>
          <div className="flex flex-col gap-6 mt-5">
            {/* Number of people */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <Label className="text-xl font-bold sm:justify-center">
                People
              </Label>
              <div className="flex items-center gap-5 justify-center">
                <Button
                  disabled={input.people <= 1}
                  size={"icon"}
                  variant={"ghost"}
                  className="cursor-pointer"
                  onClick={() => {
                    if (input.people <= 2) return;
                    setInput({ ...input, people: input.people - 1 });
                  }}
                >
                  <MinusCircle className="size-5" strokeWidth={2} />
                </Button>
                <span className="text-lg lg:text-xl font-bold border px-3.5 py-1 rounded-lg">
                  {input.people}
                </span>
                <Button
                  disabled={input.people >= 10}
                  size={"icon"}
                  variant={"ghost"}
                  className="cursor-pointer"
                  onClick={() => {
                    if (input.people >= 10) return;
                    setInput({ ...input, people: input.people + 1 });
                  }}
                >
                  <PlusCircle className="size-5" strokeWidth={2} />
                </Button>
              </div>
            </div>

            {/* Days */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <Label className="text-xl font-bold sm:justify-center ">
                Days
              </Label>
              <div className="flex items-center gap-5 justify-center">
                <Button
                  disabled={input.PackageDays <= props.PackageDays}
                  size={"icon"}
                  variant={"ghost"}
                  className="cursor-pointer"
                  onClick={() => {
                    if (input.PackageDays <= 1) return;
                    setInput({
                      ...input,
                      PackageDays: input.PackageDays - 1,
                    });
                  }}
                >
                  <MinusCircle className="size-5" strokeWidth={2} />
                </Button>
                <span className="text-lg lg:text-xl font-bold border px-3.5 py-1 rounded-lg">
                  {input.PackageDays}
                </span>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="cursor-pointer"
                  onClick={() => {
                    setInput({
                      ...input,
                      PackageDays: input.PackageDays + 1,
                    });
                  }}
                >
                  <PlusCircle className="size-5" strokeWidth={2} />
                </Button>
              </div>
            </div>

            {/* Date Picker */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <Label className="text-xl font-bold sm:justify-center">
                Start Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "justify-start font-medium p-4 md:p-5",
                      !input.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="h-3 w-3" />
                    {input.startDate ? (
                      <span className="text-xs md:text-sm lg:text-base">
                        {new Date(input.startDate).toDateString()}
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm md:text-base">
                        Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={input.startDate}
                    onSelect={(date) => {
                      date && setInput({ ...input, startDate: new Date(date) });
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Price */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <Label className="text-xl font-bold sm:justify-center">
                Price Starts from
              </Label>
              <span className="text-lg lg:text-xl font-bold border px-3.5 py-1 rounded-lg">
                ₹ {input.PackagePrice}
              </span>
            </div>

            {/* Hotel Selection */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <Label className="text-xl font-bold sm:justify-center">
                Hotel
              </Label>
              <div className="flex items-center gap-5 justify-center">
                <div className="flex items-center space-x-2 group">
                  <Label htmlFor="r2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => handleSelectHotel("3 Star")}
                            variant={`${
                              input.hotel === "3 Star" ? "default" : "ghost"
                            }`}
                            size={"sm"}
                              className={`${input.hotel === "3 Star" && "bg-green-600"} hover:bg-green-400 hover:text-white cursor-pointer`}
                            >
                            3 Star Hotel
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            ₹{input.people * input.PackageDays * 800 * 0.8} for{" "}
                            {input.people} people for {input.PackageDays} days
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="r3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => handleSelectHotel("5 Star")}
                            variant={`${
                              input.hotel === "5 Star" ? "default" : "ghost"
                            }`}
                            size={"sm"}
                            className={`${input.hotel === "5 Star" && "bg-green-600"} hover:bg-green-400 hover:text-white cursor-pointer`}
                          >
                            5 star Hotel
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            ₹{input.people * input.PackageDays * 1000 * 0.8} for{" "}
                            {input.people} people for {input.PackageDays} days
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                </div>
              </div>
            </div>

            {/* Checkbox whthter payment is online or offline */}
            <div className="flex items-center space-x-2 px-6">
              <Checkbox
                className="rounded-full checked:bg-primary checked:border-primary size-5"
                id="terms"
                checked={payOnline}
                onCheckedChange={(checked) => setpayOnline(checked === true)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Check this box if you want to pay online
              </label>
            </div>
            {/* Button */}
            {user ? (
              <Button
                disabled={loading || !user}
                onClick={handleBooking}
                variant={"outline"}
                className="w-full text-white max-w-96 mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <span>
                    {payOnline
                      ? "Pay Now and Book your trip"
                      : "Book Trip and Pay Later"}
                  </span>
                )}
              </Button>
            ) : (
              <>
                <Button
                  variant={"outline"}
                  className="w-full max-w-96 mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
                <p className="text-center text-red-500 -mt-4">
                  Please login to book your trip
                </p>
              </>
            )}
            <InquirySection expand={false} />
          </div>
        </div>
      )}
    </>
  );
}

export default BookingCard;
