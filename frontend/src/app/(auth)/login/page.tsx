"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { Loader } from "lucide-react";
function Login() {
  const [input, setinput] = useState({
    isoCode: "",
    mobile: "",
    password: "",
  });
  const [loading, setloading] = useState<boolean>(false);
  const { login, error } = useAuthStore();

  const countries = getCountries();
  const handleCountryChange = (country: any) => {
    if (country) {
      setinput({ ...input, isoCode: `+${getCountryCallingCode(country)}` });
    } else {
      setinput({ ...input, isoCode: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setloading(true);
      // Call your login function here with the input data
      await login(input);
      // For example: await login(input);
    } catch (error) {
      // Handle error
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-7rem)] bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm ">
        <h1 className="text-3xl font-bold mb-4 text-center border-b-4 border-blue-100">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col ">
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center font-mono">
              {error}
            </div>
          )}
          {/* Mobile number */}
          <div className="mb-4 flex flex-col gap-1">
            <Label className="text-sm ml-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Mobile
            </Label>
            <div className="flex items-center gap-1">
              <Select onValueChange={(value) => handleCountryChange(value)}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select ISO code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country Code</SelectLabel>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country} (+{getCountryCallingCode(country)})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                type="text"
                pattern="\d{10}"
                title="Please enter a valid 10-digit mobile number"
                required
                value={input.mobile}
                onChange={(e) => setinput({ ...input, mobile: e.target.value })}
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4 flex flex-col gap-1">
            <Label className="text-sm ml-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </Label>
            <Input
              type="password"
              required
              value={input.password}
              onChange={(e) => setinput({ ...input, password: e.target.value })}
              placeholder="Enter Password"
            />
          </div>

          {/* Login Button */}
          <Button
            className="w-full mt-1 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
            disabled={loading}
            type="submit"
          >
            {loading ? <Loader className="animate-spin size-4" /> : "Login"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
