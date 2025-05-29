"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DoorOpen, Menu } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

function Header() {
  const { user, logout, token, isAdmin } = useAuthStore();
  return (
    <div className="flex justify-between items-center p-2 px-6 border-b-2 w-full mx-auto sticky top-0 z-20 bg-gray-100">
      <div className="contents">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            priority={true}
            src="/images/logo.png"
            width={200}
            height={150}
            alt="logo"
          />
        </Link>
      </div>

      {/* Desktop View */}
      <div className="lg:flex items-center gap-10 hidden">
        <Link href={"/"} className="text-xl font-bold ">
          Home
        </Link>
        <Link href={"/about"} className="text-xl font-bold ">
          About
        </Link>
        <Link href={"/#blogs"} className="text-xl font-bold ">
          Blogs
        </Link>
        <Link href={"/package"} className="text-xl font-bold ">
          Package
        </Link>
        <Link href={"/hotels"} className="text-xl font-bold ">
          Hotels
        </Link>
        {user && token ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar className="size-10">
                <AvatarImage src="/images/user-profile.png" />
                <AvatarFallback>
                  {user.fullname[0] +
                    (user.fullname.split(" ")[1] &&
                    user.fullname.split(" ")[1].length > 0
                      ? user.fullname.split(" ")[1][0] || " "
                      : " ")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center gap-2 px-3 py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/images/user-profile.png" />
                  <AvatarFallback>
                    {user.fullname[0] +
                      (user.fullname.split(" ")[1] &&
                      user.fullname.split(" ")[1].length > 0
                        ? user.fullname.split(" ")[1][0] || " "
                        : " ")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold">{user.fullname}</span>
              </div>
              <DropdownMenuLabel className="font-bold text-lg flex items-center justify-between">
                <span>My Wallet</span> <span>₹{user.CashbackAmount}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="font-bold text-lg">
                <Link href={"/bookings"}>Bookings</Link>
              </DropdownMenuItem>
              {isAdmin && (
                <DropdownMenuItem asChild className="font-bold text-lg">
                  <Link href={"/admin"}>Admin</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                asChild
                onClick={logout}
                className="text-red-600 font-bold text-lg flex items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  Logout <DoorOpen className="size-4" color="red" />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link
              href={"/login"}
              className="text-xl font-semibold cursor-pointer underline underline-offset-1 text-blue-500"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="text-xl font-semibold cursor-pointer underline underline-offset-2 text-blue-500"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden block">
        <Sheet>
          <SheetTrigger className="cursor-pointer">
            {user ? (
              <Avatar className="size-10">
                <AvatarImage src="/images/user-profile.png" />
                <AvatarFallback>
                  {user.fullname[0] +
                    (user.fullname.split(" ")[1] &&
                    user.fullname.split(" ")[1].length > 0
                      ? user.fullname.split(" ")[1][0] || " "
                      : " ")}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Menu />
            )}
          </SheetTrigger>
          <SheetContent className="w-72">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">
                Explore India View
              </SheetTitle>
              <div className="flex flex-col gap-5 mt-10 font-mono ">
                {user && token && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                      <div className="flex items-center gap-2 px-3 py-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/images/user-profile.png" />
                          <AvatarFallback>
                            {user.fullname[0] +
                              (user.fullname.split(" ")[1] &&
                              user.fullname.split(" ")[1].length > 0
                                ? user.fullname.split(" ")[1][0] || " "
                                : " ")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-lg font-semibold">
                          {user.fullname}
                        </span>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                      <DropdownMenuLabel className="font-bold text-lg flex items-center justify-between">
                        <span>My Wallet</span>{" "}
                        <span>₹{user.CashbackAmount}</span>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <SheetClose asChild>
                        <DropdownMenuItem asChild className="font-bold text-lg">
                          <Link href={"/bookings"}>Bookings</Link>
                        </DropdownMenuItem>
                      </SheetClose>
                      {isAdmin && (
                        <SheetClose asChild>
                          <DropdownMenuItem
                            asChild
                            className="font-bold text-lg"
                          >
                            <Link href={"/admin"}>Admin</Link>
                          </DropdownMenuItem>
                        </SheetClose>
                      )}
                      <SheetClose asChild>
                        <DropdownMenuItem
                          asChild
                          onClick={logout}
                          className="text-red-600 font-bold text-lg flex items-center gap-2"
                        >
                          <div className="flex items-center gap-2">
                            Logout <DoorOpen className="size-4" color="red" />
                          </div>
                        </DropdownMenuItem>
                      </SheetClose>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                <SheetClose asChild>
                  <Link href={"/"} className="text-xl font-semibold">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/about"} className="text-xl font-semibold">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/#blogs"} className="text-xl font-semibold ">
                    Blogs
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/package"} className="text-xl font-semibold ">
                    Package
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/hotels"} className="text-xl font-semibold ">
                    Hotels
                  </Link>
                </SheetClose>
                {!user && !token && (
                  <>
                    <SheetClose asChild>
                      <Link
                        href={"/login"}
                        className="text-xl font-semibold cursor-pointer underline underline-offset-1 text-blue-500"
                      >
                        Login
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={"/signup"}
                        className="text-xl font-semibold cursor-pointer underline underline-offset-2 text-blue-500"
                      >
                        Sign-Up
                      </Link>
                    </SheetClose>
                  </>
                )}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
