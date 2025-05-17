"use client";
import { Landing } from "@/components/shared/Landing";
import { API_URL } from "@/services/API";
import { IMAGES } from "@/services/Images";
import { CAROUSELIMAGE } from "@/services/Options";
import { BOOKINGTYPE } from "@/services/types";
import { useAuthStore } from "@/store/auth.store";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function page() {
  const { token } = useAuthStore();
  const [Bookings, setBookings] = useState<BOOKINGTYPE[]>([]);
  const [loading, setloading] = useState(false);
  const getBookings = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/booking/get-bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      setBookings(response.data.bookings);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <Landing IMAGES={CAROUSELIMAGE} />
      <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-120px)]">
        <h1 className="text-2xl md:text-4xl mb-5 font-semibold text-center font-serif">
          Bookings
        </h1>
        <div className="flex justify-center">
          {loading && (
            <Loader2 className="animate-spin size-16 text-green-500" />
          )}
        </div>
        <div>
          {!loading && Bookings.length > 0 ? (
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
              {Bookings.map((booking, idx) => (
                <div key={idx} className="p-4 border rounded-3xl shadow-md">
                  <img
                    src={IMAGES[Math.floor(Math.random() * IMAGES.length)]}
                    alt={booking.PackageName}
                    width={500}
                    height={500}
                    className="w-full h-56 md:h-72 object-cover rounded-2xl"
                  />
                  <h2 className="text-xl md:text-2xl font-bold my-4 text-center border-b-2">
                    {booking.PackageName}
                  </h2>
                  <div className="grid grid-cols-2 gap-5 p-2 text-sm font-medium sm:text-base sm:font-semibold">
                    <p className="text-center">
                      Start Date:{" "}
                      {(booking.startDate as unknown as string).split("T")[0]}
                    </p>
                    <p className="text-center">Days: {booking.PackageDays}</p>
                    <p className=" font-semibold text-center">
                      Price: ₹ {booking.PackagePrice}
                    </p>
                    <p className=" font-semibold text-center">
                      Number of People: {booking.people}
                    </p>
                    {(booking.PlaceList ?? []).length > 0 && (
                      <p className=" font-semibold col-span-2 text-center">
                        Places: {(booking.PlaceList ?? []).join(", ")}
                      </p>
                    )}
                    {(booking.AdventureList ?? []).length > 0 && (
                      <p className=" font-semibold col-span-2 text-center">
                        Adventures: {(booking.AdventureList ?? []).join(", ")}
                      </p>
                    )}
                    {booking.hotel && (
                      <p className=" font-semibold col-span-2 text-center">
                        Hotel: {booking.hotel}
                      </p>
                    )}
                    {booking.paymentStatus &&
                    booking.paymentStatus.order_id &&
                    booking.paymentStatus.payment_id ? (
                      <p className=" font-semibold col-span-2 text-center">
                        <span>Payment Status:</span>{" "}
                        <span className="text-green-500">Paid</span>
                      </p>
                    ) : (
                      <p className=" font-semibold col-span-2 text-center">
                        <span>Payment Status:</span>{" "}
                        <span className="text-red-500">Payment Pending</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !loading && (
              <h1 className="text-2xl text-red-500 mb-5 font-semibold text-center font-mono">
                No Bookings Found
              </h1>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default page;
