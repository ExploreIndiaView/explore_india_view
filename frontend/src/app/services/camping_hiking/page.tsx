import { Landing } from "@/components/shared/Landing";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CAMPING } from "@/services/Options";
import Image from "next/image";
import React from "react";

function Camping() {
  return (
    <>
    <Landing IMAGES={CAMPING.images}/>
    <div className="p-5">
      <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
        Camping & Hiking
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:px-16">
      {CAMPING.data.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
            />
            <CardTitle className="text-lg md:text-xl font-bold text-center">
              {item.name}
            </CardTitle>
            <CardDescription className="text-justify font-medium text-sm max-sm:line-clamp-5">{item.desc}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-center mt-auto">
            <Button className="w-1/2">View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Camping;
