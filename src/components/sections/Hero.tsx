"use client"
import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Hero() {
  return (
  <section className="w-full rounded-3xl mx-auto py-12 sm:py-16 px-2 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-10 sm:mt-20 mb-10 sm:mb-20 gap-8" id="hero">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start justify-start text-left">
          <h1 className="text-[#676561] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-0 drop-shadow-[2px_2px_0_#e0e7ef,4px_4px_0_#d8c8f5,0_2px_8px_rgba(0,0,0,0.12)]">
            Study Smarter
          </h1>
          <h1 className="text-[#a5cffd] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-0 drop-shadow-[2px_2px_0_#e0e7ef,4px_4px_0_#b3d1ff,0_2px_8px_rgba(0,0,0,0.12)]">
            Not Harder
          </h1>
          <p className="mt-6 text-gray-700 w-full text-left text-base sm:text-lg md:text-xl leading-relaxed mb-0">
            Transform your notes into personalized quizzes, flashcards, and interactive study materials. Let AI create the perfect study plan just for you! ✨
          </p>
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 w-full">
            <button
              className="bg-purple-100 text-gray-700 font-bold border-4 border-gray-600 rounded-2xl shadow-[4px_4px_0_#666] px-6 sm:px-8 py-2 text-base sm:text-lg transition-transform duration-150 outline-none focus:outline-none active:scale-95 hover:scale-105 w-full sm:w-auto"
            >
              Start Studying for Free
            </button>
          </div>
          {/* Social/contact icons row */}
          <div className="flex flex-row gap-6 mt-6">
            <a href="mailto:info@wisker.app" className="flex items-center gap-2 text-gray-700 font-semibold text-base hover:text-blue-500 transition-colors">
              <FaEnvelope className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577887210771" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 font-semibold text-base hover:text-blue-600 transition-colors">
              <FaFacebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/company/wisker/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 font-semibold text-base hover:text-blue-700 transition-colors">
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        {/* Right Column: Example image or illustration */}
        <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <div className="group">
            <Image
              src="/wisker_mockup.png"
              alt="Wisker Preview"
              width={350}
              height={160}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-3xl border-4 px-2 py-2 bg-[#e6f0ff] object-cover group-hover:scale-105 transition-transform duration-200"
              style={{
                borderColor: '#4a90e2',
                boxShadow: `12px 12px 0 #b3d1ff, 0 4px 24px rgba(74,144,226,0.10), 0 0 0 8px #fafafa, 0 8px 32px #a5cffd, 0 0 0 2px #8bb6f7`
              }}
              priority
            />
          </div>
        </div>
  </div>
  {/* Separator above info */}
  <div className="w-full border-t-2 border-gray-200 mt-8"></div>
  {/* Metrics/information section */}
  <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8">
    <div className="flex items-center gap-2 text-gray-700 font-semibold text-base">
      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z"/></svg>
      <span>10,000+ students</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700 font-semibold text-base">
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3 17a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1h-3V4a3 3 0 10-6 0v2H4a1 1 0 00-1 1v10zm5-13a1 1 0 112 0v2H8V4zm-3 3h10v10H5V7z"/></svg>
      <span>95% improved grades</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700 font-semibold text-base">
      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V7a1 1 0 112 0v4a1 1 0 01-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z"/></svg>
      <span>AI-powered study plans</span>
    </div>
  </div>
  {/* Separator below info */}
  <div className="w-full border-t-2 border-gray-200 mb-8"></div>
    </section>
  );
}

export default Hero