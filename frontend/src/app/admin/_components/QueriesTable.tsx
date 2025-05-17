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
import { QUERIESTYPE } from "@/services/types";
import { LoaderCircle } from "lucide-react";

interface props  {
  loading: boolean;
  Queries: QUERIESTYPE[]
  pageNumber: number;
  setpageNumber: React.Dispatch<React.SetStateAction<number>>
  
}
function QueriesTable({ loading, Queries, pageNumber, setpageNumber }: props) {


  if (loading)
    <div className="h-[calc(100vh-11rem)] w-full bg-gray-300/50">
      <LoaderCircle className="mx-auto animate-spin size-16 text-emerald-500" />
    </div>;
  return (
    <div className="min-h-[calc(100vh-10rem)] w-full bg-gray-300/50 p-2">
      <Table>
        <TableHeader className="border-2 border-black">
          <TableRow className="border-2 border-black bg-gray-400">
            <TableHead className="w-[50px] font-medium border border-black">
              Sr.no
            </TableHead>
            <TableHead className="border-r border-black">Name</TableHead>
            <TableHead className="border-r border-black">
              Mobile Number
            </TableHead>
            <TableHead className="border-r border-black min-w-[200px]">Message</TableHead>
            <TableHead className="border-r border-black">Verified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-2 border-black">
          {Queries.length > 0 ? Queries.map((query, index) => (
            <TableRow key={query._id} className="border-2 border-black font-medium">
              <TableCell className="w-[50px] border border-black">
                {index + 1}
              </TableCell>
              <TableCell className="border-r border-black">
                {query.user.fullname}
              </TableCell>
              <TableCell className="border-r border-black">
                {query.user.mobile}
              </TableCell>
              <TableCell className="border-r border-black">
                {query.message}
              </TableCell>
              <TableCell className="border-r border-black">
                {query.user.isVerified ? "Verified" : "Not Verified"}
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No Queries Found
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
              disabled={Queries.length < 10}
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

export default QueriesTable;
