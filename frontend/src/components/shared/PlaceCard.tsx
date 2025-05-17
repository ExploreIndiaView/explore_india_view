import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PACKAGETYPE } from "@/services/types";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function PlaceCard({ pack, lineclamp }: { pack: PACKAGETYPE, lineclamp?: boolean }) {
  const navigate = useRouter();
  return (
    <Card className="rounded-4xl shadow-xl">
      <CardHeader>
        <Image
          src={pack.image}
          alt={pack.name}
          layout="responsive"
          height={1000}
          width={500}
          className=" object-cover rounded-t-2xl aspect-video"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className={`font-bold text-center ${lineclamp ? "line-clamp-1 text-xl" : "text-2xl"}`}>
          {pack.name}
        </CardTitle>
        <CardDescription className={`text-center font-bold font-mono ${lineclamp ? "text-lg" : "text-xl"}`}>
          {pack.days} days / {pack.nights} nights
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto flex justify-center ">
        <Button
          size={lineclamp ? "default" : "lg"}
          variant={"default"}
          className="bg-gray-600 text-white cursor-pointer"
          onClick={() => {
            navigate.push(`/packages/${pack.__id}`);
          }}
        >
          View Package
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PlaceCard;
