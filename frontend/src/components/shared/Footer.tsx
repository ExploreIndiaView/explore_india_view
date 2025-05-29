import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPlus,
  MessageCircle,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[url(https://img.freepik.com/free-photo/abstract-wave-cyan-color-black-background_1268-28760.jpg?t=st=1706202170~exp=1706205770~hmac=c064fc4e73ad1a1e01a1f0782257b32e7a155abf6f8c97fe918c827d1c953e32&w=1060)] p-5 text-white bg-cover bg-no-repeat mt-5">
      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Quick Links */}
        <div className="p-3">
          <h1 className="text-xl font-bold font-serif">Quick Links</h1>
          <div className="font-mono text-sm mt-2">
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              Home
            </Link>
            <Link
              href={"/about"}
              className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              About
            </Link>
            <Link
              href={"/package"}
              className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              Package
            </Link>
            <Link
              href={"/hotels"}
              className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              Hotels
            </Link>
            <Link
              href={"/privacy-policy"}
              className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              Privacy Policy
            </Link>
            <Link
              href={"/terms-and-conditions"}
              className="flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <ChevronRight
                size={15}
                className="text-purple-800"
                strokeWidth={5}
              />
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-3">
          <h1 className="text-xl font-bold font-serif">Contact Information</h1>
          <div className="text-sm font-mono mt-2">
            <Link
              href="tel:+919588041628"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <PhoneCall
                size={15}
                className="fill-purple-700 text-purple-600"
              />
              +91 9588041628
            </Link>
            <Link
              href="tel:+918209598333"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <PhoneCall
                size={15}
                className="fill-purple-700 text-purple-600"
              />
              +91 8209598333
            </Link>
            <Link
              href="tel:+918426090454"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <PhoneCall
                size={15}
                className="fill-purple-700 text-purple-600"
              />
              +91 8426090454
            </Link>
            <Link
              href="mailto:exploreindiaview@gmail.com"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <Mail size={15} className="fill-purple-700 text-white" />
              exploreindiaview@gmail.com
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <MapPlus size={15} className="fill-purple-700 text-purple-600" />
              Rajasthan, India-302012
            </Link>
          </div>
        </div>

        {/* Follow Us */}
        <div className="p-3">
          <h1 className="text-xl font-bold font-serif">Contact Information</h1>
          <div className="text-sm font-mono mt-2">
            <Link
              href={"https://www.facebook.com/profile.php?id=61575066421510"}
              target="_blank"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <Facebook size={15} className="fill-purple-700 text-purple-600" />
              Facebook
            </Link>
            <Link
              href={"https://www.linkedin.com/in/n-cube-4808662bb/"}
              target="_blank"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <Linkedin size={15} className="fill-purple-700 text-purple-600" />
              Linkedin
            </Link>
            <Link
              href={"https://www.youtube.com/@Ncube-r8p"}
              target="_blank"
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
            >
              <Youtube size={15} className="fill-purple-700 text-purple-600" />
              Youtube
            </Link>
            <Link
              href={
                "/https://www.instagram.com/explore_india_view/?next=%2F&hl=en"
              }
              className="flex items-center gap-2 hover:gap-5 transition-all duration-300"
              target="_blank"
            >
              <Instagram size={15} className="fill-purple-700 " />
              Instagram
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="font-serif text-sm mt-2">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Incredible Tour To India. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
