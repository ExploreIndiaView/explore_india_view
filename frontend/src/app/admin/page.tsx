"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore } from "@/store/auth.store";
import { BookImage, MessageCircleQuestionIcon } from "lucide-react";
import Image from "next/image";
import BookingTable from "./_components/BookingTable";
import QueriesTable from "./_components/QueriesTable";
import { useEffect, useState } from "react";
import { BOOKINGTYPE, DETAILTYPES, QUERIESTYPE } from "@/services/types";
import axios from "axios";
import { API_URL } from "@/services/API";
import Details from "./_components/Details";

function AdminPage() {
  const { isAdmin, token } = useAuthStore();
  const [Queries, setQueries] = useState<QUERIESTYPE[]>([]);
  const [pageNumber, setpageNumber] = useState<number>(1);
  const [queriesPageNumber, setqueriesPageNumber] = useState(1);
  const [details, setDetails] = useState<DETAILTYPES | null>(null);
  const [loading, setloading] = useState(false);
  const [bookings, setbookings] = useState<BOOKINGTYPE[]>([]);

  // fetch Queries
  const fetchQueries = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/query/get-queries?page=${pageNumber}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      setQueries(response.data.queries);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  // Fetch All Bookings
  const fetchAllBookings = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/booking/get-bookings-admin?page=${pageNumber}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      setbookings(response.data.bookings);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchAllBookings();
  }, [pageNumber]);

  useEffect(() => {
    fetchQueries();
  }, [queriesPageNumber]);

  if (!isAdmin)
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <Image
          src={"/images/logo.png"}
          width={200}
          height={200}
          alt={"logo"}
          className="mb-5 animate-bounce"
        />
        <h1 className="text-xl md:text-2xl mb-5 font-bold text-center text-red-400 font-mono">
          Unauthorized
        </h1>
      </div>
    );
  return (
    <div className="px-3 mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <Details token={token || ""} />
      <Tabs defaultValue="Bookings" className="w-full mt-5">
        <TabsList className="mx-auto">
          <TabsTrigger value={"Bookings"}>
            <BookImage />
            Bookings
          </TabsTrigger>
          <TabsTrigger value={"Queries"}>
            <MessageCircleQuestionIcon />
            Queries
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Bookings" className="h-[calc(100vh-10rem)] w-full">
          <BookingTable
            loading={loading}
            bookings={bookings}
            pageNumber={pageNumber}
            setpageNumber={setpageNumber}
          />
        </TabsContent>
        <TabsContent value="Queries" className="h-[calc(100vh-10rem)] w-full">
          <QueriesTable
            loading={loading}
            Queries={Queries}
            pageNumber={queriesPageNumber}
            setpageNumber={setqueriesPageNumber}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminPage;
