"use client";
import { PACKAGES } from "@/services/Options";
import { Button } from "../ui/button";
import PlaceCard from "./PlaceCard";
import { useRouter } from "next/navigation";
import CreateOwnPackageModal from "./CreateOwnPackageModal";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Packages() {
  const packagePart1 = PACKAGES.slice(0, 6);
  const packagePart2 = PACKAGES.slice(5, 11);
  // If you want to show more packages, you can adjust the slicing accordingly
  
  const router = useRouter();
  return (
    <div className="md:px-16">
      {PACKAGES.length > 0 && (
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
            Packages
          </h1>
            <CreateOwnPackageModal title="Create Your Own Package" />
          <Carousel
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="p-7">
              {packagePart1.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <PlaceCard
                    pack={packagePart1[index]}
                    key={index}
                    lineclamp={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="p-7">
              {packagePart2.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <PlaceCard
                    pack={packagePart2[index]}
                    key={index}
                    lineclamp={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                router.push("/package");
              }}
              size={"lg"}
              className="mt-5 bg-gray-600 text-white cursor-pointer"
            >
              Show More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;
