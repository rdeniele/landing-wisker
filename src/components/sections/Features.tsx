"use client";
import React from "react";
import { FaMagic, FaCalendarAlt, FaTags, FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";

const features = [
	   {
		   icon: <FaMagic size={32} style={{ color: "#ffea00" }} />,
		title: "Smart Quizzes",
		desc: "AI generates personalized quizzes from your notes, targeting your weak spots for maximum learning efficiency.",
		color: "#a3cfff",
		border: "#5c5c5c"
	},
	   {
		   icon: <FaClipboardList size={32} style={{ color: "#ff69b4" }} />,
		title: "Auto-Generated Interactive Flashcards",
		desc: "Dynamic flashcards that adapt to your learning pace, with spaced repetition for better retention.",
		color: "#d8c8f5",
		border: "#5c5c5c"
	},
	   {
		   icon: <FaMapMarkedAlt size={32} style={{ color: "#00e676" }} />,
		title: "Adaptive Learning Concept Maps",
		desc: "Visual learning made easy with customizable concept maps that show connections between ideas.",
		color: "#b8e5c8",
		border: "#5c5c5c"
	},
	   {
		   icon: <FaCalendarAlt size={32} style={{ color: "#40c4ff" }} />,
		title: "Visual Learning Study Schedules",
		desc: "AI creates personalized study schedules that fit your lifestyle and maximize retention.",
		color: "#fdd2e5",
		border: "#5c5c5c"
	},
	   {
		   icon: <FaTags size={32} style={{ color: "#ff9100" }} />,
		title: "Personalized Subject-Based Exams",
		desc: "Comprehensive exams generated from all your notes with the same subject tag for thorough preparation.",
		color: "#ffe7a1",
		border: "#5c5c5c"
	},
	   {
		   icon: <FaMagic size={32} style={{ color: "#a3cfff" }} />,
		title: "AI-Powered Magic",
		desc: "Advanced AI that learns your study patterns and continuously improves your learning experience.",
		color: "#fafafa",
		border: "#5c5c5c",
		comingSoon: true
	},
];

export default function Features() {
	return (
		<section className="w-full bg-gray-50 py-16">
			<div className="max-w-5xl mx-auto px-4">
				<h1 className="font-extrabold text-5xl md:text-6xl text-gray-700 text-center mb-8 drop-shadow-[2px_2px_0_#a3cfff,4px_4px_0_#d8c8f5] tracking-tight leading-tight">
					Everything You Need to<br />Ace Your Exams
				</h1>
				<p className="text-gray-700 text-xl text-center mb-12">
					Our AI transforms your study materials into engaging, personalized learning experiences
				</p>
				<div className="flex flex-col gap-10 items-center justify-center w-full max-w-4xl mx-auto">
					<div className="flex flex-row gap-10 justify-center w-full">
						{features.slice(0, 3).map((f) => (
							<div
								key={f.title}
								className={`transition-transform duration-150 cursor-pointer flex flex-col items-center bg-white rounded-3xl border-4 shadow-lg px-8 py-10 min-w-[220px] max-w-[320px] h-[340px] gap-6 ${f.comingSoon ? 'opacity-60' : ''}`}
								style={{ background: f.color, borderColor: f.border, boxShadow: "12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)" }}
								onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
								onMouseLeave={e => (e.currentTarget.style.transform = "")}
							>
								{f.icon}
								<h3 className="font-bold text-lg text-gray-700 text-center mb-1">{f.title}</h3>
								<p className="text-gray-600 text-base text-center m-0">{f.desc}</p>
								{f.comingSoon && (
									<span className="mt-2 text-pink-500 font-bold text-base">Coming Soon</span>
								)}
							</div>
						))}
					</div>
					<div className="flex flex-row gap-10 justify-center w-full">
						{features.slice(3, 6).map((f) => (
							<div
								key={f.title}
								className={`transition-transform duration-150 cursor-pointer flex flex-col items-center bg-white rounded-3xl border-4 shadow-lg px-8 py-10 min-w-[220px] max-w-[320px] h-[340px] gap-6 ${f.comingSoon ? 'opacity-60' : ''}`}
								style={{ background: f.color, borderColor: f.border, boxShadow: "12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)" }}
								onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
								onMouseLeave={e => (e.currentTarget.style.transform = "")}
							>
								{f.icon}
								<h3 className="font-bold text-lg text-gray-700 text-center mb-1">{f.title}</h3>
								<p className="text-gray-600 text-base text-center m-0">{f.desc}</p>
								{f.comingSoon && (
									<span className="mt-2 text-pink-500 font-bold text-base">Coming Soon</span>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
