"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isSignedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {


  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // On mount, check auth status from API
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        setIsSignedIn(data.isSignedIn);
      } catch {
        setIsSignedIn(false);
      }
    };
    checkAuth();

    // Listen for token changes in localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "wisker_token") {
        checkAuth();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem("wisker_token", data.token);
        setIsSignedIn(true);
        return true;
      }
      setIsSignedIn(false);
      return false;
    } catch {
      setIsSignedIn(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {}
    localStorage.removeItem("wisker_token");
    setIsSignedIn(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
