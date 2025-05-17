"use client";
import { Landing } from "@/components/shared/Landing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ONEDAYTOUR } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function OneDayTour() {
  const router = useRouter();
  return (
    <>
      <Landing IMAGES={ONEDAYTOUR.images} />
      <div className="p-5">
        <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
          One Day Tour
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {ONEDAYTOUR.cities.map((city, idx) => (
            <Card key={idx}>
              <CardHeader>
                <Image
                  src={city.image}
                  alt={city.name}
                  width={500}
                  height={500}
                  className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
                />
                <CardTitle className="text-xl md:text-2xl font-bold text-center">
                  {city.name}
                </CardTitle>
                <CardDescription className="text-center font-bold font-mono text-xl">
                  Special Day Tour
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-center">
                <Button
                  className="bg-gray-600 text-white cursor-pointer text-sm md:text-base"
                  onClick={() =>
                    router.push(`/services/onedaytour/${city.name}`)
                  }
                >
                  View Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default OneDayTour;
