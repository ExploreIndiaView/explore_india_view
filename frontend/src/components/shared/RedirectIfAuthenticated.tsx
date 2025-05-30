"use client";
import { useAuthStore } from "@/store/auth.store";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
function RedirectIfAuthenticated({ children }: { children: ReactNode }) {
  const { checkAuth, user, token, checkingAuth } = useAuthStore();
  useEffect(() => {
    if (!user) checkAuth();
  }, [user, checkAuth]);

  // redirecting login and signup path if user is already authenticated
  const pathname = usePathname();
  const router = useRouter();
  const isLoginOrSignupPath = pathname === "/login" || pathname === "/signup";
  useEffect(() => {
    if (user && token && user.isVerified && isLoginOrSignupPath) {
      router.push("/");
    }
  }, [user, isLoginOrSignupPath, router]);
  if (checkingAuth) {
    return null;
}
  return <>{children}</>;
}

export default RedirectIfAuthenticated;
