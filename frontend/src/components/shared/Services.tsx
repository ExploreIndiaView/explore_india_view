"use client";
import { OTHERSERVICES, SERVICES, TOPSERVICES } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/auth.store";

function Services() {
  const router = useRouter();
  const {user} = useAuthStore();
  return (
    <div className="md:px-16">
      {TOPSERVICES.length > 0 && (
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {TOPSERVICES.map((service, idx) => (
              <div key={idx} className="p-4 border rounded-lg shadow-md">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-t-lg h-56"
                />
                <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
                  {service.name}
                </h2>
                <div className="w-full flex items-center justify-center my-4">
                  <Button
                    onClick={() => router.push(`/services/${service.path}`)}
                    className="bg-gray-600 text-white cursor-pointer"
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            ))}
            {OTHERSERVICES.map((service, idx) => (
              <div key={idx} className="p-4 border rounded-lg shadow-md">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-t-lg h-56"
                />
                <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
                  {service.name}
                </h2>
                <div className="w-full flex items-center justify-center my-4">
                  <Button
                    onClick={() => {
                      window.open(`${service.path}&subid=${user?.mobile}`, "_blank");
                    }}
                    className="bg-gray-600 text-white cursor-pointer"
                  >
                    Explore More
                  </Button>
                </div>
                  <h1 className="text-center font-bold text-sm">Powered by: {service.PoweredBy}</h1>
              </div>
            ))}

            {SERVICES.map((service, idx) => (
              <div key={idx} className="p-4 border rounded-lg shadow-md">
                <Image
                  src={service.image[0].image}
                  alt={service.name}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
                  {service.name}
                </h2>
                <div className="w-full flex items-center justify-center my-4">
                  <Button
                    onClick={() => router.push(`/services/${service.__id}`)}
                    className="bg-gray-600 text-white cursor-pointer"
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
