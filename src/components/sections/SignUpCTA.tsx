"use client";
import React from "react";
import { FaRegStar, FaRegCreditCard, FaBullseye } from "react-icons/fa";

export default function SignUpCTA() {
	return (
		<section className="w-full bg-[#b8e5c8] py-10 sm:py-14 mt-12">
			<div className="max-w-xl mx-auto px-4 text-center">
				<h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#5c5c5c] mb-6 sm:mb-8 drop-shadow-[2px_2px_0_#a3cfff,4px_4px_0_#d8c8f5] leading-tight">
					Ready to Transform<br />Your Study Game?
				</h1>
				<p className="text-[#444] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed">
					Join thousands of students who are already studying smarter with Wisker. Start your free trial today and see the difference AI can make!
				</p>
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-7">
					<a
						href="/signup"
						className="inline-block bg-[#fdd2e5] text-[#5c5c5c] font-bold text-base sm:text-lg border-4 border-[#5c5c5c] rounded-xl px-6 sm:px-12 py-3 shadow-[6px_6px_0_#5c5c5c,0_2px_12px_rgba(0,0,0,0.08)] no-underline transition-transform duration-150 hover:scale-105 focus:scale-105"
					>
						Start Free Trial
					</a>
					<a
						href="/learn-more"
						className="inline-block bg-white text-[#5c5c5c] font-bold text-base sm:text-lg border-4 border-[#5c5c5c] rounded-xl px-6 sm:px-12 py-3 shadow-[6px_6px_0_#5c5c5c,0_2px_12px_rgba(0,0,0,0.08)] no-underline transition-transform duration-150 hover:scale-105 focus:scale-105"
					>
						Learn More
					</a>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-4">
					<div className="flex items-center gap-2 text-[#5c5c5c] font-semibold text-sm sm:text-base">
						<FaRegStar size={22} className="text-[#ffe600]" /> Free 14-day trial
					</div>
					   <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#5c5c5c", fontWeight: 600, fontSize: "1.05rem" }}>
						   <FaRegCreditCard size={22} style={{ color: "#ff69b4" }} /> No credit card required
					   </div>
					   <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#5c5c5c", fontWeight: 600, fontSize: "1.05rem" }}>
						   <FaBullseye size={22} style={{ color: "#00e676" }} /> Cancel anytime
					   </div>
				   </div>
			</div>
		</section>
	);
}
