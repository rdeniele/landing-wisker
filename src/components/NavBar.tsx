"use client";
import React from "react";
import Image from "next/image";

const logoUrl = "/Wisker.png"; // Local logo in public directory

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 border-b-2 border-[#b3d1ff] bg-white">
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
        <a
          href="/login"
          className="text-gray-700 no-underline px-4 py-2 rounded-lg font-bold text-base border-2 border-transparent shadow-sm transition-all duration-150 hover:bg-[#e6f0ff] hover:text-gray-900 hover:border-[#b3d1ff] active:scale-95 focus:outline-none"
        >
          Login
        </a>
        <a
          href="/signup"
          className="px-6 py-2 bg-[#b3d1ff] text-gray-900 rounded-xl font-extrabold text-base border-2 border-gray-700 no-underline shadow-sm transition-all duration-150 hover:bg-[#8bb6f7] hover:text-white active:scale-95 focus:outline-none"
        >
          Sign Up Free
        </a>
      </div>
    </nav>
  );
}