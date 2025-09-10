"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";


export default function ComingSoon() {
	const [hovered, setHovered] = useState(false);
		return (
				<main className="relative flex flex-col items-center justify-center min-h-screen bg-white">
					<div className="w-full flex flex-col items-center py-10 px-8 rounded-3xl mb-8 border-4 border-[#5c5c5c] bg-white max-w-xl shadow-lg" style={{ boxShadow: '12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)' }}>
					<h1 className="text-4xl font-bold text-[#2a4365] drop-shadow mb-2">Coming Soon!</h1>
					<p className="text-xl text-[#2a4365]/90 mb-6">Thank you for signing up. Stay tuned for updates!</p>
					<div className="w-full flex flex-col items-center bg-[#FFE7A1] border-4 border-[#5c5c5c] border-dashed rounded-xl p-6 shadow-md">
						<h2 className="text-lg font-bold text-[#2a4365] mb-2">Your Early Access Code</h2>
						<div className="text-2xl font-bold text-[#2a4365] tracking-wider my-2 bg-[#ffb74d] rounded-md py-2 px-4 border-4 border-[#5c5c5c]">EARLYCAT50</div>
						<p className="text-base text-[#2a4365] mt-2">Use this code when the app launches to get <span className="font-bold text-[#FF9100]">50% off</span> your first purchase.<br /><span className="text-[#2a4365]/80">Yes, this code is valid for all early users!</span></p>
					</div>
					<Link href="/" className="mt-8 font-bold text-[#4a90e2] hover:underline hover:text-[#171717] transition-colors duration-150 text-lg">Back to Home</Link>
				</div>
				<div
					className="absolute left-0 bottom-0 p-6 flex items-end"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
											<div className={`w-20 h-20 overflow-hidden rounded-xl transition-transform duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${hovered ? 'scale-[1.15] shadow-lg shadow-[#8bb6f7]' : ''}`}
											>
															<Image
																src={hovered ? "/Wisker.png" : "/Wisky/Wisky-hi.png"}
																alt="Wisky the Cat"
																width={80}
																height={80}
																className="rounded-xl w-full h-full select-none"
																draggable={false}
															/>
								</div>
								{!hovered && (
									<span className="ml-4 mb-8 text-xs text-[#4a90e2] font-semibold animate-pulse absolute left-24 bottom-8">hover over here 👈</span>
								)}
					{hovered && (
						<div className="ml-3 mb-6 bg-[#f5faff] border-2 border-[#b3d1ff] rounded-xl px-4 py-3 text-[#2a4365] font-bold text-base shadow-md min-w-[120px] relative animate-[fadeInUp_0.5s_cubic-bezier(.68,-0.55,.27,1.55)]">
							<span className="absolute -left-4 bottom-2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[18px] border-r-[#b3d1ff]"></span>
							  Yo, big things dropping soon. Stay pawsitive!
						</div>
					)}
				</div>
				{/* Tailwind custom animation for fadeInUp */}
				<style>{`
					@layer utilities {
						@keyframes fadeInUp {
							from {
								opacity: 0;
								transform: translateY(20px);
							}
							to {
								opacity: 1;
								transform: translateY(0);
							}
						}
					}
				`}</style>
			</main>
	);
}
