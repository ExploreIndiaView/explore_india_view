import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@/services/types";
import { API_URL } from "@/services/API";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const AddCashbackDialog = ({ token }: { token: string }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [amount, setAmount] = useState("");
  const [userList, setUserList] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setloading] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/auth/getAllUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 400) throw new Error(response.data.message);
      setUserList(response.data.users);
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  // Filter users by search input
  const filteredUsers = userList.filter(
    (user) =>
      user.fullname.toLowerCase().includes(search.toLowerCase()) ||
      user.mobile.includes(search)
  );

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setSearch(`${user.fullname} (${user.mobile})`);
    setShowDropdown(false);
  };

  const handleSubmit = async () => {
    // Handle your submit logic here
    if (!selectedUser || !amount) return;
    const cashbackData = {
      mobile: selectedUser.mobile,
      CashbackAmount: parseFloat(amount),
    };
    setloading(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/addCashback`,
        cashbackData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      toast.success("Cashback added successfully!");
      // Reset form
      setSelectedUser(null);
      setAmount("");
      setSearch("");
      setShowDropdown(false);
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Failed to add cashback");
      } else {
        toast.error("An unexpected error occurred");
      }      
    }
    finally {
      setloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full max-w-3xl bg-gradient-to-r from-emerald-500 to-teal-700 cursor-pointer text-white">
          Add Cashback
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Cashback</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Select User</Label>
            <div className="relative mt-2">
              <Input
                placeholder="Search by name or number"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                  setSelectedUser(null);
                }}
                onFocus={() => setShowDropdown(true)}
                autoComplete="off"
              />
              {showDropdown && search && filteredUsers.length > 0 && (
                <div className="absolute z-10 bg-white border w-full max-h-48 overflow-y-auto rounded shadow">
                  {filteredUsers.map((user) => (
                    <div
                      key={user._id}
                      className="px-3 py-2 hover:bg-emerald-100 cursor-pointer"
                      onClick={() => handleUserSelect(user)}
                    >
                      {user.fullname} ({user.mobile})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter cashback amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-2"
              min="0"
            />
          </div>
          <DialogFooter>
            <Button
              className="w-full max-w-xl bg-gradient-to-r from-emerald-500 to-teal-700 cursor-pointer text-white"
              onClick={handleSubmit}
              disabled={!selectedUser || !amount || loading}
            >
              {loading ? <Loader className="animate-spin"/> : "Submit"}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCashbackDialog;
