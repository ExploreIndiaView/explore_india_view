"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import BookingCard from "./BookingCard";
import { ADVENTURE, RAJASTHANDISTRICTS } from "@/services/Options";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

function CreateOwnPackageModal({ title }: { title: string }) {
  const [PlaceList, setPlaceList] = useState<string[]>([]);
  const [AdventureList, setAdventureList] = useState<string[]>([]);
  const [onDone, setonDone] = useState(false);
  const { user } = useAuthStore();
  const router = useRouter();

  const OnCitySelect = (city: string) => {
    if (PlaceList.includes(city)) {
      return;
    }
    if (!PlaceList.includes(city)) {
      setPlaceList([...PlaceList, city]);
    }
  };

  const OnAdventureSelect = (adventure: string) => {
    if (AdventureList.includes(adventure)) {
      return;
    }
    if (!AdventureList.includes(adventure)) {
      setAdventureList([...AdventureList, adventure]);
    }
  };

  const onDeleteAdventure = (adventure: string) => {
    setAdventureList(AdventureList.filter((adv) => adv !== adventure));
  };

  const onDeleteCity = (city: string) => {
    setPlaceList(PlaceList.filter((place) => place !== city));
  };
  return (
    <>
      {user ? (
        <Dialog
          onOpenChange={() => {
            setPlaceList([]);
            setonDone(false);
            setAdventureList([]);
          }}
        >
          <DialogTrigger asChild className="my-4 flex items-center w-full">
            <Button
              variant={"secondary"}
              className="w-1/2 mx-auto bg-gradient-to-r from-emerald-500 to-teal-400 cursor-pointer"
            >
              {title}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] max-h-[calc(100vh-8rem)] overflow-auto w-full overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                Fill basic details and create your own package
              </DialogDescription>
            </DialogHeader>
            {!onDone ? (
              <>
                <Select onValueChange={(e) => OnCitySelect(e)}>
                  <SelectTrigger className="w-full max-w-[450px] line-clamp-1">
                    <SelectValue placeholder="Select Cities to visit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Cities</SelectLabel>
                      {RAJASTHANDISTRICTS.map((pack, idx) => (
                        <SelectItem key={idx} value={pack}>
                          {pack}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-3">
                  {PlaceList.map((city, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 cursor-pointer relative p-1.5 rounded-md text-white text-sm font-semibold"
                      onClick={() => onDeleteCity(city)}
                    >
                      <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center ">
                        x
                      </span>
                      {city}
                    </div>
                  ))}
                </div>

                {/* Select Adventure */}
                <Select onValueChange={(e) => OnAdventureSelect(e)}>
                  <SelectTrigger className="w-full max-w-[450px] line-clamp-1">
                    <SelectValue placeholder="Select Adventures" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Adventures</SelectLabel>
                      {ADVENTURE.data.map((pack, idx) => (
                        <SelectItem key={idx} value={pack.name}>
                          {pack.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-3">
                  {AdventureList.map((adv, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 cursor-pointer relative p-1.5 rounded-md text-white text-sm font-semibold"
                      onClick={() => onDeleteAdventure(adv)}
                    >
                      <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center ">
                        x
                      </span>
                      {adv}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => setonDone(true)}
                  disabled={PlaceList.length < 1}
                  variant={"secondary"}
                  className="w-full bg-gradient-to-r from-green-500 via-teal-400 to-emerald-400"
                >
                  Done
                </Button>
              </>
            ) : (
              <>
                <h1>Cities</h1>
                <div className="flex flex-wrap gap-3">
                  {PlaceList.map((city, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 p-1.5 rounded-md text-white text-sm font-semibold"
                    >
                      {city}
                    </div>
                  ))}
                </div>
                <h1>Adventures</h1>
                <div className="flex flex-wrap gap-3">
                  {AdventureList.map((adv, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 p-1.5 rounded-md text-white text-sm font-semibold"
                    >
                      {adv}
                    </div>
                  ))}
                </div>
                <BookingCard
                  props={{
                    PackageName: "Custom Package",
                    PackageDays: PlaceList.length,
                    PlaceList: PlaceList,
                    PackagePrice: 1800,
                    AdventureList: AdventureList,
                  }}
                />
              </>
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <div className="w-full flex justify-center">
          <Button
            variant={"secondary"}
            onClick={() => router.push("/login")}
            className="w-1/2 mx-auto bg-gradient-to-r from-emerald-500 to-teal-400 cursor-pointer justify-self-center"
          >
            Please Login to create your own package
          </Button>
        </div>
      )}
    </>
  );
}

export default CreateOwnPackageModal;
