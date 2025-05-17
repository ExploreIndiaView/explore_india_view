"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";

function Verification() {
  const { user } = useAuthStore();
  const [otp, setotp] = useState<string>("");
  const { verifyOtp, resendOtp } = useAuthStore();
  const [setTime, setsetTime] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const handleVerify = async () => {
    try {
      setisLoading(true);
      if (otp.length < 6) {
        toast.error("Please enter a valid OTP");
        return;
      }
      if (!user) {
        toast.error("User not found");
        return;
      }
      // Call the API to verify the OTP
      await verifyOtp(otp, user.mobile);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  const handleResend = async () => {
    if (!user) {
      toast.error("User not found");
      return;
    }
    // Call the API to resend the OTP
    await resendOtp(user.mobile);
    setsetTime(120); // Set the timer to 120 seconds
    const interval = setInterval(() => {
      setsetTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  };
  return (
    <div>
      <p className="text-center mb-4">
        We have sent a verification code to your mobile number{" "}
        <span className="font-semibold font-mono">{user?.mobile}</span>. Please
        enter the code below to verify your account.
      </p>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={otp}
        onChange={(value) => setotp(value)}
      >
        <InputOTPGroup className="mx-auto border-2 border-blue-500 rounded-lg">
          <InputOTPSlot index={0} className="border-r border-blue-500" />
          <InputOTPSlot index={1} className="border-r border-blue-500" />
          <InputOTPSlot index={2} className="border-r border-blue-500" />
          <InputOTPSlot index={3} className="border-r border-blue-500" />
          <InputOTPSlot index={4} className="border-r border-blue-500" />
          <InputOTPSlot index={5} className="border-r border-blue-500" />
        </InputOTPGroup>
      </InputOTP>
      <Button
        disabled={isLoading}
        className=" w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        variant={"outline"}
        onClick={handleVerify}
      >
        {isLoading ? <Loader className="animate-spin size-4" /> : "Verify OTP"}
      </Button>
      <div className="flex items-baseline justify-center mt-4">
        <p className="text-center mt-4 text-sm text-gray-500">
          Didn&apos;t receive the code?{" "}
        </p>
        <Button
          disabled={isLoading || setTime > 0}
          variant={"link"}
          size={"sm"}
          className="underline underline-offset-1 text-blue-500 -ml-1 cursor-pointer"
          onClick={handleResend}
        >
          Resend OTP
        </Button>
      </div>
      {setTime > 0 && (
        <p className="text-center text-sm text-gray-500">
          {setTime > 0 ? `Resend OTP in ${setTime} seconds` : ""}
        </p>
      )}
    </div>
  );
}

export default Verification;
