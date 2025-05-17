"use client";
import CreateOwnPackageModal from "@/components/shared/CreateOwnPackageModal";
import PlaceCard from "@/components/shared/PlaceCard";
import { PACKAGES } from "@/services/Options";
import React from "react";

function Package() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif">Packages</h1>
      <CreateOwnPackageModal title="Create Your Own Package" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PACKAGES.map((pkg, idx) => (
          <PlaceCard pack={pkg} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Package;
