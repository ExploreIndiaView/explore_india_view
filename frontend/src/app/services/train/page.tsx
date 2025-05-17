"use client";
import React from "react";
import { Landing } from "@/components/shared/Landing";
import { MapPin, Calendar, Clock, TrainIcon } from "lucide-react";
import { RAILWAYIMAGES, TRAINSERVICES } from "@/services/Options";
import CitySearchBar from "@/components/shared/Searchbar";

function Train() {
  const affiliateBaseUrl =
    "https://linksredirect.com/?cid=230828&source=linkkit&url=https%3A%2F%2Fwww.railyatri.in%2F";

  const handleRedirect = (destination: string) => {
    const encodedDestination = encodeURIComponent(destination);
    const redirectUrl = `${affiliateBaseUrl}?destination=${encodedDestination}`;
    window.open(redirectUrl, "_blank");
  };

  return (
    <>
      {/* Landing Section */}
      <Landing IMAGES={RAILWAYIMAGES} />

      {/* Header */}
      <div className="p-5">
        <h1 className="text-3xl md:text-5xl mb-8 font-bold text-center font-serif text-green-600 border-b-4 border-green-500">
          Train Services
        </h1>
        <p className="text-center text-gray-600 text-lg md:text-xl">
          Explore our top train services for a seamless travel experience. Book
          tickets to your favorite destinations with ease!
        </p>
      </div>

      {/* Search bar section */}
      <CitySearchBar doubleSearch={true} />
      
      {/* Train Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-10">
        {TRAINSERVICES.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => handleRedirect(item.name)}
          >
            <div className="flex items-center justify-center mb-4">
              <TrainIcon className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-center font-semibold text-xl text-gray-800 mb-2">
              {item.name}
            </h1>
            <p className="text-center text-gray-600">
              Book your train journey for {item.name.split(" - ")[0]} to{" "}
              {item.name.split(" - ")[1]} with ease and comfort.
            </p>
          </div>
        ))}
      </div>

      {/* Additional Information Section */}
      <div className="mt-10 px-5 md:px-20 py-10 bg-green-50 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-6">
          Why Choose Our Train Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Wide Destinations
            </h3>
            <p className="text-gray-600">
              Travel to a wide range of destinations across India with our
              trusted railway services.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600">
              Choose from multiple train schedules to suit your travel plans.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              On-Time Trains
            </h3>
            <p className="text-gray-600">
              Experience punctual and reliable train services for a hassle-free
              journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrainIcon className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Comfortable Travel
            </h3>
            <p className="text-gray-600">
              Enjoy comfortable seating and excellent onboard services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Train;
