"use client";
import { PACKAGES } from "@/services/Options";
import { PACKAGETYPE } from "@/services/types";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import BookingCard from "@/components/shared/BookingCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PlaceCard from "@/components/shared/PlaceCard";
import Autoplay from "embla-carousel-autoplay";
import RajasthanMap from "@/components/shared/Maps";

function PackageDetail() {
  const { packageId } = useParams();
  const [Package, setPackage] = useState<PACKAGETYPE | null>(null);
  useEffect(() => {
    PACKAGES.filter((pack) => pack.__id === packageId).map((pack) => {
      return setPackage(pack);
    });
  }, [packageId]);

  return (
    Package && (
      <div className="p-6 md:p-10">
        <div className="flex flex-col gap-6 ">
          <div className="w-full relative max-h-[650px] overflow-hidden">
            <Image
              src={Package.image}
              alt={Package.name}
              layout="responsive"
              width={1500}
              height={1200}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <h1 className="text-xl md:text-2xl font-bold absolute top-3/5 md:top-4/5 ml-3 text-white  p-2 rounded-lg">
              {Package.name}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex flex-col justify-center px-2 md:w-3/5">
              {/* Overview  section*/}
              {Package.Overview && Package.Overview.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">OverView</h1>
                  <div className="flex flex-col gap-3 mt-4">
                    {Package.Overview?.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-justify camelCase font-medium text-sm text-gray-500"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </>
              )}

              {/* Highlights section */}
              {Package.Highlights && Package.Highlights.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">Highlights</h1>
                  <div className="flex flex-col gap-3 mt-4 camelCase">
                    {Package?.Highlights?.map((item, idx) => (
                      <div className="flex items-center gap-2" key={idx}>
                        <Star className="ml-2 size-4 text-purple-700 fill-purple-600" />
                        <p
                          key={idx}
                          className="text-justify list-decimal list-inside text-sm font-medium text-gray-500 "
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Itinerary Section */}
              {Package.Itinerary && Package.Itinerary.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">Itinerary</h1>
                  <div className="flex flex-col gap-3 mt-4">
                    {Package?.Itinerary?.map((item, idx) => {
                      const sanitizedContent = () => {
                        return {
                          __html: DOMPurify.sanitize(item.description || ""),
                        };
                      };
                      return (
                        <div key={idx} className=" mb-3">
                          <div className="flex items-center gap-2">
                            <Star className="ml-2 size-4 text-purple-700 fill-purple-600" />
                            <h2 className="text-lg font-bold camelCase w-4/5">
                              {item.name}
                            </h2>
                          </div>
                          <p
                            key={idx}
                            className="text-justify px-2 ml-5 camelCase font-medium text-sm text-gray-500"
                            dangerouslySetInnerHTML={sanitizedContent()}
                          ></p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* Inclusions Section */}
              {Package.Inclusion && Package.Inclusion.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">Inclusions</h1>
                  <div className="flex flex-col gap-3 mt-4 px-2">
                    {Package?.Inclusion?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="size-4 fill-purple-600 text-purple-700" />
                        <p
                          key={idx}
                          className="max-md:text-justify line-clamp-1 camelCase w-4/5 font-medium text-sm text-gray-500"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Exclusion Section */}
              {Package.Exclusion && Package.Exclusion.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">Exclusions</h1>
                  <div className="flex flex-col gap-3 mt-4 px-2">
                    {Package?.Exclusion?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="size-4 fill-purple-600 text-purple-700" />
                        <p
                          key={idx}
                          className="text-justify line-clamp-1 camelCase w-4/5 font-medium text-sm text-gray-500"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* FAQs section */}
              {Package.FAQs && Package.FAQs.length > 0 && (
                <>
                  <h1 className="text-xl mt-5 font-bold">FAQs</h1>
                  <div className="flex flex-col gap-3 mt-4">
                    {Package?.FAQs?.map((item, idx) => (
                      <div key={idx} className="px-2">
                        <div className="inline-flex items-center gap-2">
                          <Star className=" size-4 text-purple-700 fill-purple-600" />
                          <h2 className="text-lg font-bold camelCase">
                            {item.name}
                          </h2>
                        </div>
                        <p
                          key={idx}
                          className="text-justify px-2 ml-3 font-medium text-sm text-gray-500"
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <RajasthanMap />

              {/* Booking Section */}
            </div>
            <div className="md:w-2/5 md:mt-10 px-3">
              <BookingCard
                props={{
                  PackageName: Package.name,
                  PackageDays: Package.days ?? 0,
                  PackagePrice: Package.Price ?? 0,
                }}
              />
            </div>
          </div>

          {/* Carousel of other packages */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="p-7">
              {PACKAGES.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <PlaceCard
                    pack={PACKAGES[index]}
                    key={index}
                    lineclamp={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    )
  );
}

export default PackageDetail;
