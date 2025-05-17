import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="flex flex-col xl:grid grid-cols-2 justify-center p-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400 text-gray-800 gap-5 md:px-20">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2018/01/23/12/07/water-palace-3101314_640.jpg"
        }
        alt="AboutUs"
        height={500}
        width={500}
        className="rounded-t-sm shadow-lg w-full"
      />
      <div className="xl:p-7">
        <h1 className="text-2xl md:text-4xl mt-5 font-bold font-serif">
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-4 text-justify font-medium">
          Our Foremost Endeavor Is To Offer An Incredible Indian Holiday
          Experience To One And All. We Are Listed Among The Expert Tour
          Operators In Jaipur, Rajasthan. We Provide:- India Tours, Rajasthan
          Tours. We Are A Reliable Tour Operator In India And An Expert For
          Rajasthan Tours. We Also Provide Hotel Booking, Car Rental, Flight
          Tickets And India Tour Packages With Flexible Tour Itineraries.
        </p>
        <Link href={"/about"}>
          <Button className="my-5 max-w-56 cursor-pointer" size={"lg"}>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
