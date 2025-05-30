"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const offers = [
  {
    id: 1,
    title: "10% Discount",
    description: "Get 10% discount on all bookings",
    image: "/images/gift1.jpg", // Place images in public/images
  },
  {
    id: 2,
    title: "Upto 400 Rupees Cashback",
    description: "Get upto 400 rupees cashback on package bookings",
    image: "/images/gift.jpg",
  },
  // Add more offers here
];

function OfferCard({ offer }: { offer: (typeof offers)[0] }) {
  return (
    <Card className="flex flex-col items-center bg-gray-50 shadow-md rounded-xl p-4 w-full max-w-lg mx-auto">
      <Image
        src={offer.image}
        alt={offer.title}
        width={1000}
        height={700}
        className="w-[500px] h-[200px] object-cover rounded-lg mb-4"
      />
      <CardContent className="w-full flex flex-col items-center">
        <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
        <p className="text-sm text-gray-600 text-center">{offer.description}</p>
      </CardContent>
    </Card>
  );
}

export default function OffersCarousel() {
  return (
    <section className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Exclusive Offers
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {offers.map((offer) => (
            <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
              <OfferCard offer={offer} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
