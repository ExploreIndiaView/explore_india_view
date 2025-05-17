"use client";
import { Landing } from "@/components/shared/Landing";
import { HOTELSDATA } from "@/services/Options";
import { HotelData } from "@/services/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function City() {
  const { city } = useParams();
  const [hotelData, sethotelData] = useState<HotelData[] | null>(null);
  useEffect(() => {
    const data = HOTELSDATA.hotels.filter((hotel) => hotel.city === city);
    sethotelData(data[0].hotels);
  }, [city]);
  return (
    hotelData && (
      <>
        <Landing IMAGES={HOTELSDATA.images} />
        <div className="p-7">
          <h1 className="text-3xl font-bold text-center font-serif my-5">
            {city} Hotels
          </h1>

          {/* Mapping hotles of the city */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotelData.map((hotel, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md pb-5 cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={500}
                  height={500}
                  className="w-full h-48 md:h-72 object-cover"
                />
                <h2 className="text-xl font-bold font-serif text-center mt-5">
                  {hotel.name}
                </h2>
                <p className="text-sm font-medium text-gray-500 text-justify p-3">{hotel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default City;
