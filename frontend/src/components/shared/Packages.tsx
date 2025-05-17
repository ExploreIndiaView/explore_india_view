"use client";
import { PACKAGES } from "@/services/Options";
import { Button } from "../ui/button";
import PlaceCard from "./PlaceCard";
import { useRouter } from "next/navigation";
import CreateOwnPackageModal from "./CreateOwnPackageModal";

function Packages() {
  const router = useRouter();
  return (
    <div className="md:px-16">
      {PACKAGES.length > 0 && (
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
            Packages
          </h1>
            <CreateOwnPackageModal title="Create Your Own Package" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PACKAGES.map(
              (pack, idx) => idx < 6 && <PlaceCard key={idx} pack={pack} />
            )}
          </div>
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
