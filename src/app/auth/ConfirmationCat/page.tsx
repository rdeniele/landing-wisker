"use client";

import Image from "next/image";

export default function ConfirmationCat() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e6f0ff] to-[#f5faff]">
      <div className="bg-white rounded-xl shadow-[0_4px_24px_#b3d1ff44] p-8 max-w-[400px] w-full text-center flex flex-col items-center justify-center">
        <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded-xl text-green-800 font-semibold w-full">
          Signup successful!
        </div>
        <Image src="/Wisker.png" alt="Wisker Logo" width={56} height={56} className="mb-4 rounded-xl border-2 border-[#b3d1ff] bg-[#f5faff] shadow-[0_2px_8px_#b3d1ff33]" />
        <div className="p-4 bg-blue-50 border border-blue-300 rounded-xl text-blue-800 font-medium text-center w-full shadow-lg mb-2">
          Yo, I&apos;m Wisky the cat! After you sign up, peep your inbox (or spam) for a confirmation. Don&apos;t leave me on read!
        </div>
      </div>
    </main>
  );
}
