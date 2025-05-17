"use client";
import { Landing } from "@/components/shared/Landing";
import { HOTELSDATA } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter();
  return (
    <>
      <Landing IMAGES={HOTELSDATA.images} />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center font-serif my-5">
          Hotels
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOTELSDATA.hotels.map((hotel, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md pb-5 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 "
              onClick={() => {
                router.push(`/hotels/${hotel.city}`);
              }}
            >
              <Image
                src={hotel.hotels[0].image}
                alt={hotel.city}
                width={500}
                height={500}
                className="w-full h-48 md:h-72 object-cover"
              />
              <h2 className="text-2xl font-bold font-serif text-center mt-5">
                {hotel.city}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
