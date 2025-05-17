import { DollarSign, Headphones, MapPlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="relative w-full">
        <Image
          src={
            "https://cdn.pixabay.com/photo/2018/01/23/12/07/water-palace-3101314_640.jpg"
          }
          alt="AboutUs"
          height={500}
          width={500}
          className="rounded-t-sm shadow-lg w-full lg:h-[600px]"
        />
        <h1 className="text-4xl md:text-6xl mt-5 font-bold font-serif absolute top-1/2 right-0 left-0 text-white text-center">
          About Us
        </h1>
      </div>

      <div>
        <div className="flex flex-col justify-center py-3">
          <h1 className="text-2xl md:text-4xl mt-5 font-bold font-serif text-center text-gray-800">
            About Us
          </h1>
        </div>
        <p className="text-lg md:text-xl font-medium p-8 text-gray-800 text-center">
          <span className="block mb-4">
            As is quite evident from the name itself – at Incredible Tour To
            India, our foremost endeavor is to offer an Incredible Indian
            Holiday experience to one and all. We are listed among the expert
            Tour Operators In Jaipur, Rajasthan. We provide:- India Tours,
            Rajasthan Tours.
          </span>
          <span className="block mb-4 camelCase">
            We are a Reliable tour Operator in India and an expert for Rajasthan
            tours.
          </span>
          <span className="block mb-4 camelCase">
            We also provide hotel booking, car rental, flight tickets and India
            tour Packages with flexible tour itineraries. We offer to all
            travelers experiences beyond anything that they have ever known
            before. With us, you will find that a limited budget is no reason
            not to go on a vacation. We design all kinds of Budget India Tours
            for travelers who have limited funds, yet have the inclination to
            travel & see the wonderful sights across the country. With a country
            like India, where there is no dearth of wonderful holiday spots and
            places of interest, we will help you experience the kind of holiday
            you always dreamed off.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 p-8">
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg shadow-md w-full">
          <MapPlusIcon className="size-24" color="#3b82f6" />
          <span>Top Destination</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg shadow-md w-full">
          <DollarSign className="size-24" color="#3b82f6" />
          <span>Affordable Price</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg shadow-md w-full">
          <Headphones className="size-24" color="#3b82f6" />
          <span>24/7 Guide Service</span>
        </div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl mt-5 font-bold font-serif text-center">
          Mission and Vision
        </h1>
        <p className="text-lg md:text-xl font-medium p-8 text-gray-800 text-center">
          We aspire to become the top travel company in the Indian Tour & Travel
          Circuit and to extend our reach to newer markets.
        </p>
        <ol className="text-lg md:text-xl font-medium p-8 text-gray-800 text-center space-y-4">
          <li>
            We want to make traveling a positive experience for one and all.
          </li>
          <li>
            We aim to be the best travel services provider with our name being
            synonymous with top quality and reliable service.
          </li>
          <li>
            We aim to exceed the expectations of our clients each and every
            time, with 100% customer satisfaction being our ultimate objective.
          </li>
          <li>
            To foster a work culture where teamwork and creativity are
            encouraged at each level. For achieving this, we are always on the
            lookout for fresh talent and encourage innovative ideas.
          </li>
        </ol>
      </div>
      <div className="p-5 ">
        <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
          For a customized tour itinerary and package please email us at: <br />
          <strong className="text-blue-500 underline ">
            exploreindiaview@gmail.com
          </strong>
        </h1>
        <p className="text-center mt-4">OR</p>
        <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
          WhatsApp at +91 8426090454 , +91 9588041628 , +91 8209598333
        </h1>
      </div>
    </>
  );
}

export default About;
