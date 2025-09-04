"use client";
import React from "react";
import Image from "next/image";
import { FaUpload, FaMagic, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
  icon: <FaUpload size={32} style={{ color: "#40c4ff" }} />,
    title: "Upload Your Notes",
    desc: "Simply upload your study materials, lecture notes, or textbook content to get started.",
    color: "#fafafa",
    border: "#5c5c5c"
  },
  {
  icon: <FaMagic size={32} style={{ color: "#ffea00" }} />,
    title: "AI Creates Magic",
    desc: "Our AI analyzes your content and generates personalized quizzes, flashcards, and study plans.",
    color: "#b8e5c8",
    border: "#5c5c5c"
  },
  {
  icon: <FaCheckCircle size={32} style={{ color: "#00e676" }} />,
    title: "Study & Succeed",
    desc: "Use your personalized study materials to learn efficiently and ace your exams!",
    color: "#ffe7a1",
    border: "#5c5c5c"
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-extrabold text-5xl md:text-6xl text-gray-700 text-center mb-12 drop-shadow-[2px_2px_0_#a3cfff,4px_4px_0_#d8c8f5] tracking-tight leading-tight">
          How Wisker<br />Works Magic
        </h2>
        <div className="flex flex-row gap-12 items-center justify-center min-h-[680px]">
          {/* Left: Huge Streak Image */}
          <div className="flex flex-col items-center justify-center min-h-[420px] w-[420px]">
            <Image
              src="/wisker_sample.png"
              alt="Streak Preview"
              width={420}
              height={420}
              className="w-full max-w-[420px] h-auto rounded-[40px] shadow-lg border-4 border-yellow-400 bg-yellow-50 mb-4 object-cover"
              priority
            />
            <div className="font-bold text-lg text-orange-500 text-center mb-1">
              Track your streaks and study journey!
            </div>
          </div>
          {/* Right: 3 Wide Cards Stacked Vertically */}
          <div className="flex-1 flex flex-col gap-8 justify-center relative">
            <div className="relative flex flex-col gap-8 items-stretch">
              {steps.map((step, idx) => (
                <div key={step.title} className="relative flex items-center">
                  {/* Connector line above (except first step) */}
                  {idx > 0 && (
                    <div className="absolute left-8 top-[-32px] h-8 w-0.5 bg-gradient-to-b from-[#5c5c5c] to-gray-300 z-0" style={{height: '32px'}} />
                  )}
                  <div
                    className="transition-transform duration-150 cursor-pointer flex flex-row items-center w-full min-w-[320px] max-w-full bg-white rounded-3xl border-4 shadow-md px-8 py-10 gap-8 focus:outline-none z-10"
                    style={{ background: step.color, borderColor: step.border, boxShadow: "8px 8px 0 #5c5c5c, 0 2px 12px rgba(0,0,0,0.08)" }}
                    tabIndex={0}
                    aria-label={`Step ${idx + 1}: ${step.title}`}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "")}
                    onFocus={e => (e.currentTarget.style.transform = "scale(1.03)")}
                    onBlur={e => (e.currentTarget.style.transform = "")}
                  >
                    <div className="font-extrabold text-4xl text-gray-700 mr-4 flex flex-col items-center">
                      {idx + 1}
                    </div>
                    <div className="mr-6">{step.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-700 mb-2">{step.title}</h3>
                      <p className="text-gray-700 text-base text-left m-0">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
