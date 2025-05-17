"use client";
import { Landing } from "@/components/shared/Landing";
import { ONEDAYTOUR } from "@/services/Options";
import { CITIESTYPE } from "@/services/types";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import BookingCard from "@/components/shared/BookingCard";

function page() {
  const { city } = useParams();
  const [cityData, setcityData] = useState<CITIESTYPE | null>(null);
  useEffect(() => {
    ONEDAYTOUR.cities.filter((c) => {
      if (c.name === city) {
        setcityData(c);
      }
    });
  }, [city]);

  return (
    cityData && (
      <>
        <Landing IMAGES={ONEDAYTOUR.images} />
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
            Overview
          </h1>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-3/5">
              {cityData.Overview.map((item, idx) => {
                const sanitizedContent = () => {
                  return { __html: DOMPurify.sanitize(item.description ?? "") };
                };
                return (
                  <div key={idx}>
                    <div className="flex items-center gap-1">
                      <Star
                        className={`size-4 text-purple-700 fill-purple-600 ${
                          item?.name ? "" : "hidden"
                        } `}
                      />
                      <h2 className="text-xl md:text-2xl font-bold my-4 text-purple-500 uppercase">
                        {item.name}
                      </h2>
                    </div>
                    <p
                      key={idx}
                      className="text-justify px-2 ml-5 text-gray-600 font-medium text-sm"
                      dangerouslySetInnerHTML={sanitizedContent()}
                    ></p>
                  </div>
                );
              })}
            </div>
            <div className="md:w-2/5 md:mt-10 px-3">
              <BookingCard
                props={{ PackageName: cityData.name, PackageDays: 1, PackagePrice: 1800 }}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default page;
