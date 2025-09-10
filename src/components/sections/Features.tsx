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
		<section className="w-full bg-gray-50 py-10 sm:py-16" id="features">
			<div className="max-w-5xl mx-auto px-2 sm:px-4">
				<h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 text-center mb-6 sm:mb-8 drop-shadow-[2px_2px_0_#a3cfff,4px_4px_0_#d8c8f5] tracking-tight leading-tight">
					Everything You Need to<br />Ace Your Exams
				</h1>
				<p className="text-gray-700 text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12">
					Our AI transforms your study materials into engaging, personalized learning experiences
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={`transition-transform duration-150 cursor-pointer flex flex-col items-center bg-white rounded-3xl border-4 shadow-lg px-4 sm:px-6 py-6 sm:py-8 gap-3 sm:gap-4 ${feature.comingSoon ? 'opacity-60' : ''}`}
							style={{ background: feature.color, borderColor: feature.border, boxShadow: "12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)" }}
							onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
							onMouseLeave={e => (e.currentTarget.style.transform = "")}
						>
							<div className="mb-1 sm:mb-2">{feature.icon}</div>
							<h3 className="font-bold text-base sm:text-lg text-gray-800 text-center mb-1">{feature.title}</h3>
							<p className="text-gray-700 text-sm sm:text-base text-center m-0 mb-2">{feature.desc}</p>
							{feature.comingSoon && (
								<span className="text-xs font-semibold text-purple-500 bg-purple-100 px-2 py-1 rounded-full">Coming Soon</span>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
