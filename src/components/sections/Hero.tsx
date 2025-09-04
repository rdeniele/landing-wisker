"use client"
import React from 'react'
import Image from "next/image";
import styles from "./Hero.module.css";
import { FaUser } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

function Hero() {
  return (
    <>
  <div className="w-full flex flex-col lg:flex-row items-start justify-between mt-20 px-4 sm:px-6 lg:px-8 mb-20 gap-8">
    {/* Left Column */}
    <div className="flex-1 flex flex-col items-start justify-start text-left">
      <h1
        style={{
          color: '#676561',
          fontWeight: 900,
          textShadow:
            '2px 2px 0 #e0e7ef, 4px 4px 0 #d8c8f5, 0 2px 8px rgba(0,0,0,0.12)',
          fontSize: '3.5rem',
          letterSpacing: '0.02em',
          width: '100%',
          textAlign: 'left',
        }}
      >
        Study Smarter
      </h1>
      <h1
        style={{
          color: '#a5cffd',
          fontWeight: 900,
          textShadow:
            '2px 2px 0 #e0e7ef, 4px 4px 0 #b3d1ff, 0 2px 8px rgba(0,0,0,0.12)',
          fontSize: '3.5rem',
          letterSpacing: '0.02em',
          width: '100%',
          textAlign: 'left',
        }}
      >
        Not Harder
      </h1>
      <p className='mt-6 text-gray-700 text-lg' style={{width: '100%', textAlign: 'left'}}>
        Transform your notes into personalized quizzes, flashcards, and interactive study materials. Let AI create the perfect study plan just for you! ✨
      </p>
      {/* CTA buttons */}
      <div className="flex gap-5 mt-8 w-full">
        <button
          className="bg-purple-100 text-gray-700 font-bold border-4 border-gray-600 rounded-2xl shadow-[4px_4px_0_#666] px-8 py-2 text-lg transition-transform duration-150 outline-none focus:outline-none active:scale-95 hover:scale-105"
        >
          Start Studying for Free
        </button>
        <button
          className="bg-white text-gray-700 font-medium border-4 border-gray-600 rounded-2xl shadow-[4px_4px_0_#666] px-8 py-2 text-lg transition-transform duration-150 outline-none focus:outline-none active:scale-95 hover:scale-105"
        >
          Watch Demo
        </button>
      </div>
      <div className="flex items-center gap-8 mt-8 text-gray-600 text-base font-medium">
        <span className="flex items-center gap-2">
          <FaUser className="text-xl" />
          10k+ students
        </span>
        <span className="flex items-center gap-2">
          <MdTrendingUp className="text-xl" />
          95% better grades
        </span>
      </div>
    </div>
    {/* Right Column */}
    <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
      <Image
        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
        alt="Students studying with laptops"
        width={800}
        height={800}
        className={`w-full h-full max-h-[400px] lg:max-h-[600px] object-cover rounded-2xl ${styles["multicolor-shadow"]}`}
        style={{ minHeight: "300px" }}
      />
    </div>
  </div>
    </>
  )
}

export default Hero