import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BOOKINGTYPE } from "@/services/types";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { UserAvatar } from "./UserAvatar";

interface BookingTableProps {
  bookings: BOOKINGTYPE[];
  pageNumber: number;
  setpageNumber: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}
function BookingTable({
  bookings,
  pageNumber,
  setpageNumber,
  loading,
}: BookingTableProps) {
  if (loading)
    <div className="h-[calc(100vh-11rem)] w-full bg-gray-300/50">
      <LoaderCircle className="mx-auto animate-spin size-16 text-emerald-500" />
    </div>;
  return (
    <div className="min-h-[calc(100vh-10rem)] w-full bg-gray-300/50 p-2">
      <Table className="h-full">
        <TableHeader className="border-2 border-black">
          <TableRow className="border-2 border-black bg-gray-400">
            <TableHead className="w-[100px] border border-black">
              Package Name
            </TableHead>
            <TableHead className="border-r border-black">Days</TableHead>
            <TableHead className="border-r border-black">Start Date</TableHead>
            <TableHead className="border-r border-black">People</TableHead>
            <TableHead className="border-r border-black">
              Mobile Number
            </TableHead>
            <TableHead className="border-r border-black">User Name</TableHead>
            <TableHead className="border-r border-black">Amount</TableHead>
            <TableHead className="text-right">Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-2 border-black">
          {bookings.length > 0 ? (
            bookings.map((bookings, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium border border-black">
                  <span>{bookings.PackageName}</span>
                  {
                    (bookings.PlaceList?.length ?? 0) > 0 && (
                      <span className="block text-xs">
                        Places: {" "}
                        {bookings.PlaceList?.join(", ") ?? ""}
                      </span>
                    )
                  }
                  {
                  (bookings.AdventureList?.length ?? 0) > 0 && (
                    <span className="block text-xs">
                      Adventures: {" "}
                      {bookings.AdventureList?.join(", ") ?? ""}
                    </span>
                  )
                  }
                </TableCell>
                <TableCell className=" border border-black">
                  {bookings.PackageDays}
                </TableCell>
                <TableCell className=" border border-black">
                  {bookings.startDate.toString().split("T")[0]}
                </TableCell>
                <TableCell className=" border border-black">
                  {bookings.people}
                </TableCell>
                <TableCell className=" border border-black">
                  {bookings.user.mobile}
                </TableCell>
                <TableCell className=" border border-black">
                  <UserAvatar User={bookings.user} />
                </TableCell>
                <TableCell className=" border border-black font-bold">
                  ₹{bookings.PackagePrice}
                </TableCell>
                <TableCell className="text-right border border-black">
                  {bookings.paymentStatus && bookings.paymentStatus.order_id ? (
                    <Badge
                      variant="outline"
                      className="bg-emerald-500 text-white"
                    >
                      Paid
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Not Paid</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No Bookings Found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableCaption className="text-center mb-0">
          <div className="mt-5 flex items-center justify-between w-2/3 mx-auto">
            <Button
              className="cursor-pointer"
              variant={"outline"}
              disabled={pageNumber <= 1}
              onClick={() => {
                if (pageNumber > 1) setpageNumber(pageNumber - 1);
                else setpageNumber(1);
              }}
            >
              Previous
            </Button>
            A list of all the Bookings.
            <Button
              className="cursor-pointer"
              disabled={bookings.length < 10}
              onClick={() => setpageNumber(pageNumber + 1)}
            >
              Next
            </Button>
          </div>
        </TableCaption>
      </Table>
    </div>
  );
}

export default BookingTable;
