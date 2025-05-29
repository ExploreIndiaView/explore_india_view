"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { API_URL } from "@/services/API";
import { useState } from "react";
import { Loader } from "lucide-react";

function InquirySection({ expand }: { expand: boolean }) {
  const { user, token } = useAuthStore();
  const [openDialog, setopenDialog] = useState(false);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setloading(true);
      if (!message) {
        toast.error("Please Enter Query");
        return;
      }
      const response = await axios.post(
        `${API_URL}/api/v1/query/create-query`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      toast.success(response.data.message);
      setmessage("");
      setopenDialog(false);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    } finally {
      setloading(false);
    }
  };
  return !expand ? (
    <Dialog open={openDialog} onOpenChange={setopenDialog}>
      <DialogTrigger className=" cursor-pointer w-full" asChild>
        <Button
          className="font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent mx-auto"
          variant="secondary"
        >
          Raise your Query
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Raise your Query</DialogTitle>
          <DialogDescription>
            You will be responded via call within 24 hours.
          </DialogDescription>
        </DialogHeader>
        {user ? (
          <div className="flex flex-col gap-5">
            <Label className="">Elaborate your query</Label>
            <Textarea
              rows={5}
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Enter your query"
            />
          </div>
        ) : (
          <div></div>
        )}
        <DialogFooter>
          {user ? (
            <Button disabled={loading} onClick={handleSubmit}>
              {loading ? <Loader className="animate-spin" /> : "Send"}
            </Button>
          ) : (
            <Button onClick={() => router.push("/login")}>Sign In</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : user ? (
    <div className="flex flex-col gap-5 max-w-200 w-full mx-auto">
      <h1 className="text-xl font-bold text-center mt-5">Raise your Query</h1>
      <Label className="">Elaborate your query</Label>
      <Textarea
        rows={5}
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        placeholder="Enter your query"
      />
      <Button disabled={loading} onClick={handleSubmit}>
        {loading ? <Loader className="animate-spin" /> : "Send"}
      </Button>
    </div>
  ) : (
    <Button
      className="font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent mx-auto w-full cursor-pointer"
      variant="secondary"
      onClick={() => router.push("/login")}
    >
      Login to Raise your Query
    </Button>
  );
}

export default InquirySection;
