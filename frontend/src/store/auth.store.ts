import { LoginInput, ResetInput, User, UserInput } from "@/services/types";
import { create } from "zustand";
import axios from "axios";
import { API_URL } from "@/services/API";
import { toast } from "sonner";
import { getFallbackRouteParams } from "next/dist/server/request/fallback-params";

interface AuthStore {
  isAuthenticated: boolean;
  isAdmin: boolean;
  checkingAuth: boolean;
  error: string | null;
  user: User | null;
  token: string | null;
  signup: (userInput: UserInput) => Promise<boolean>;
  verifyOtp: (otp: string, mobile: string) => Promise<void>;
  resendOtp: (mobile: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  checkAdmin: () => Promise<void>;
  login: (user: LoginInput) => Promise<void>;
  logout: () => void;
  resetPassword: (userInput: ResetInput) => Promise<boolean>;
  reset: () => void;
  addCashback: (amount: number) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  isAdmin: false,
  error: null,
  user: null,
  token: null,
  checkingAuth: true,
  // signup function to register the user
  signup: async (userInput) => {
    set({ error: null });
    try {
      if (
        !userInput.fullname ||
        !userInput.mobile ||
        !userInput.password ||
        !userInput.isoCode ||
        !userInput.answer ||
        !userInput.question
      ) {
        set({ error: "Please fill all fields" });
        return false;
      }
      const response = await axios.post(`${API_URL}/api/v1/auth/register`, {
        ...userInput,
        mobile: userInput.isoCode + userInput.mobile,
      });
      if (response.status === 400) throw new Error(response.data.message);
      set({ token: response.data.token });
      // check for admin also
      try {
        const responseAdmin = await axios.get(
          `${API_URL}/api/v1/auth/check-admin`,
          {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          }
        );
        if (responseAdmin.data.isAdmin) {
          set({
            isAdmin: true,
          });
        }
        if (responseAdmin.status === 401)
          throw new Error(responseAdmin.data.message);
      } catch (error) {}
      set({
        isAuthenticated: true,
        user: response.data.user,
        token: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      return true;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      set({ error: error.response?.data?.message || "Something went wrong" });
      return false;
    }
  },
  // login function to authenticate the user
  login: async (userInput) => {
    set({ error: null });
    try {
      if (!userInput.mobile || !userInput.password || !userInput.isoCode) {
        set({ error: "Please fill all fields" });
        return;
      }
      const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
        ...userInput,
        mobile: userInput.isoCode + userInput.mobile,
      });
      if (response.status === 400) throw new Error(response.data.message);
      set({ token: response.data.token });
      // check for admin also
      try {
        const responseAdmin = await axios.get(
          `${API_URL}/api/v1/auth/check-admin`,
          {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          }
        );
        if (responseAdmin.data.isAdmin) {
          set({ isAdmin: true });
        }
        if (responseAdmin.status === 401) throw new Error(responseAdmin.data);
      } catch (error) {}
      set({
        isAuthenticated: true,
        user: response.data.user,
        token: response.data.token,
      });
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      set({ error: error.response?.data?.message || "Something went wrong" });
    }
  },
  // reset Password
  resetPassword: async (userInput) => {
    try {
      set({ error: null });
      if (
        !userInput.mobile ||
        !userInput.password ||
        !userInput.isoCode ||
        !userInput.answer ||
        !userInput.question
      ) {
        set({ error: "Please fill all fields" });
        return false;
      }

      const response = await axios.post(
        `${API_URL}/api/v1/auth/forgot-password`,
        {
          ...userInput,
          mobile: userInput.isoCode + userInput.mobile,
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      toast.success(response.data.message);
      return true;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      set({ error: error.response?.data?.message || "Something went wrong" });
      return false;
    }
  },
  // verifyOtp function to verify the OTP sent to the user
  verifyOtp: async (otp, mobile) => {
    set({ error: null });
    try {
      if (!otp || !mobile) {
        set({ error: "Please fill all fields" });
        return;
      }
      const response = await axios.put(
        `${API_URL}/api/v1/auth/verify-account`,
        {
          otp,
          mobile,
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      set({
        isAuthenticated: true,
        user: response.data.user,
        token: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      set({ error: error.response?.data?.message || "Something went wrong" });
    }
  },
  // resendOtp function to resend the OTP to the user
  resendOtp: async (mobile) => {
    set({ error: null });
    try {
      if (!mobile) {
        set({ error: "Please Enter a valid mobile number" });
        return;
      }
      const response = await axios.post(`${API_URL}/api/v1/auth/resend-otp`, {
        mobile,
      });
      if (response.status === 400) throw new Error(response.data.message);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      set({ error: error.response?.data?.message || "Something went wrong" });
    }
  },
  // checkAuth function to check if the user is authenticated
  checkAuth: async () => {
    set({ error: null, checkingAuth: true });
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/api/v1/auth/check-auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 401) throw new Error(response.data.message);
      set({ token: token });
      // check for admin also
      try {
        const responseAdmin = await axios.get(
          `${API_URL}/api/v1/auth/check-admin`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (responseAdmin.status === 401) throw new Error(responseAdmin.data);
        if (responseAdmin.data.isAdmin) {
          set({
            isAdmin: true,
            isAuthenticated: true,
            user: responseAdmin.data.user,
          });
        }
      } catch (error: any) {}
      if (response.data.user) {
        set({
          isAuthenticated: true,
          user: response.data.user,
          token: token,
        });
      }
    } catch (error: any) {
    } finally {
      set({ checkingAuth: false });
    }
  },
  // Checking admin
  checkAdmin: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await axios.get(`${API_URL}/api/v1/auth/check-admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 400) throw new Error(response.data.message);
      set({ isAdmin: true });
    } catch (error: any) {
    }
  },
  logout: () => {
    try {
      localStorage.removeItem("token");
      set({
        isAuthenticated: false,
        isAdmin: false,
        error: null,
        user: null,
        token: null,
      });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error Logging out");
      set({ error: "Error Logging out" });
    }
  },
  reset: () =>
    set({
      isAuthenticated: false,
      isAdmin: false,
      error: null,
      user: null,
      token: null,
    }),
  addCashback: async (amount: number) => {
    const currentUser = get().user;
    try {
      if (!currentUser || !currentUser._id) {
        throw new Error("User or User ID is not defined");
      }
      set({ user: { ...currentUser, CashbackAmount: amount } });
    } catch (error) {}
  },
}));
