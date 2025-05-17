// components/CitySearchBar.jsx
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { City } from "country-state-city";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

const CitySearchBar = ({ doubleSearch }: { doubleSearch: boolean }) => {
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
  const [selectedCity1, setSelectedCity1] = useState<CityOption | null>(null);

  useEffect(() => {
    // Get all cities in India (countryCode: 'IN')
    const indianCities = City.getCitiesOfCountry("IN");

    // Format for react-select
    const cityOptions = (indianCities || []).map((city) => ({
      value: city.name,
      label: `${city.name}, ${city.stateCode}`,
    }));

    setCities(cityOptions);
  }, []);

  interface CityOption {
    value: string;
    label: string;
  }

  const handleChange1 = (selectedOption: CityOption | null): void => {
    setSelectedCity(selectedOption);
    console.log("Selected city:", selectedOption);
  };

  const handleChange2 = (selectedOption: CityOption | null): void => {
    setSelectedCity1(selectedOption);
    console.log("Selected Destination:", selectedOption);
  };

  const affiliateBaseUrl =
    "https://linksredirect.com/?cid=230828&source=linkkit&url=https%3A%2F%2Fwww.makemytrip.com%2Fhotels";

  const handleRedirect = (destination: string) => {
    const encodedDestination = encodeURIComponent(destination);
    const redirectUrl = `${affiliateBaseUrl}`;
    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 flex items-center gap-4 mb-6">
      <Select
        options={cities}
        onChange={handleChange1}
        placeholder="Search cities in India..."
        isSearchable
        className="w-full max-w-xl"
      />

      {doubleSearch && (
        <>
          <div> TO </div>
          <Select
            options={cities}
            onChange={handleChange2}
            placeholder="Search cities in India..."
            isSearchable
            className="w-full max-w-xl"
          />
        </>
      )}
      <Button
        size={"icon"}
        variant={"ghost"}
        className="bg-gradient-to-r from-emerald-500 to-teal-500"
        onClick={() => handleRedirect(selectedCity?.value || "")}
      >
        <Search className="size-6 text-white" />
      </Button>
    </div>
  );
};

export default CitySearchBar;
