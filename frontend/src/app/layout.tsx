import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { Toaster } from "sonner";
import RedirectIfAuthenticated from "@/components/shared/RedirectIfAuthenticated";
import Footer from "@/components/shared/Footer";
import ChatBotPopover from "@/components/shared/ChatBot";
import FloatingWhatsAppButton from "@/components/shared/FloatingWhatsappbtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore India View",
  description: "A Online Platform that helps you to Explore India",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[2000px] mx-auto`}
      >
        <RedirectIfAuthenticated>
          <Header />
          <ChatBotPopover open={false} />
          {children}
          <Toaster />
          <Footer />
          <FloatingWhatsAppButton/>
        </RedirectIfAuthenticated>
      </body>
    </html>
  );
}
