import { Landing } from "@/components/shared/Landing";
import { ADVENTURE } from "@/services/Options";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CreateOwnPackageModal from "@/components/shared/CreateOwnPackageModal";
function Adventure() {
  return (
    <>
      <Landing IMAGES={ADVENTURE.images} />
      <div className="p-5">
        <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
          Adventures
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {ADVENTURE.data.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
                />
                <CardTitle className="text-xl md:text-2xl font-bold text-center">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-justify font-medium  line-clamp-5">
                  {item.desc}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-center mt-auto">
                <CreateOwnPackageModal title={"Book Adventure"}/>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Adventure;
