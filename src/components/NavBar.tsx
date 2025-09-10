
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../lib/AuthContext";

const logoUrl = "/Wisker.png"; // Local logo in public directory

export default function NavBar() {
  const { isSignedIn, logout } = useAuth();


  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 border-b-2 border-[#b3d1ff] bg-white">
      <div className="flex items-center gap-3">
        <Image
          src={logoUrl}
          alt="Wisker Logo"
          width={40}
          height={40}
          className="rounded-lg border-2 border-[#b3d1ff] bg-[#f5faff]"
          priority
        />
        <span className="font-extrabold text-2xl text-gray-800 tracking-tight leading-none font-sans">Wisker</span>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/" className="text-gray-700 font-bold text-base px-2 py-1 hover:text-[#4a90e2] transition-colors">Home</Link>
        <a href="#how-it-works" className="text-gray-700 font-bold text-base px-2 py-1 hover:text-[#4a90e2] transition-colors">How It Works</a>
        <a href="#features" className="text-gray-700 font-bold text-base px-2 py-1 hover:text-[#4a90e2] transition-colors">Features</a>
        <a href="#blogs" className="text-gray-700 font-bold text-base px-2 py-1 hover:text-[#4a90e2] transition-colors">Blogs</a>
        {!isSignedIn ? (
          <>
            <a
              href="/auth/SignIn"
              className="text-gray-700 no-underline px-4 py-2 rounded-lg font-bold text-base border-2 border-transparent shadow-sm transition-all duration-150 hover:bg-[#e6f0ff] hover:text-gray-900 hover:border-[#b3d1ff] active:scale-95 focus:outline-none"
            >
              Login
            </a>
            <a
              href="/auth/SignUp"
              className="px-6 py-2 bg-[#b3d1ff] text-gray-900 rounded-xl font-extrabold text-base border-2 border-gray-700 no-underline shadow-sm transition-all duration-150 hover:bg-[#8bb6f7] hover:text-white active:scale-95 focus:outline-none"
            >
              Sign Up Free
            </a>
          </>
        ) : (
          <button
            onClick={logout}
            className="px-6 py-2 bg-[#e6f0ff] text-[#4a90e2] rounded-xl font-extrabold text-base border-2 border-[#b3d1ff] shadow-sm transition-all duration-150 hover:bg-[#b3d1ff] hover:text-[#171717] active:scale-95 focus:outline-none"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}