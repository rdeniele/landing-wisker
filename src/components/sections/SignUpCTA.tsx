"use client";
import React from "react";
import { FaRegStar, FaRegCreditCard, FaBullseye } from "react-icons/fa";

export default function SignUpCTA() {
	return (
		<section style={{ width: "100%", background: "#b8e5c8", padding: "56px 0 48px 0", marginTop: 48 }}>
			<div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
					<h1 style={{ fontWeight: 900, fontSize: "3rem", color: "#5c5c5c", marginBottom: 24, textShadow: "2px 2px 0 #a3cfff, 4px 4px 0 #d8c8f5", lineHeight: 1.1 }}>
						Ready to Transform<br />Your Study Game?
					</h1>
					<p style={{ color: "#444", fontSize: "1.25rem", marginBottom: 36, lineHeight: 1.6 }}>
						Join thousands of students who are already studying smarter with Wisker. Start your free trial today and see the difference AI can make! 🚀
					</p>
				   <div style={{ display: "flex", gap: "18px", justifyContent: "center", marginBottom: 28 }}>
					   <a
						   href="/signup"
						   style={{
							   display: "inline-block",
							   background: "#fdd2e5",
							   color: "#5c5c5c",
							   fontWeight: 700,
							   fontSize: "1.2rem",
							   border: "4px solid #5c5c5c",
							   borderRadius: "18px",
							   padding: "18px 48px",
							   boxShadow: "6px 6px 0 #5c5c5c, 0 2px 12px rgba(0,0,0,0.08)",
							   textDecoration: "none",
							   transition: "transform 0.15s",
						   }}
						   onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
						   onMouseLeave={e => (e.currentTarget.style.transform = "")}
					   >
						   Start Free Trial
					   </a>
					   <a
						   href="/learn-more"
						   style={{
							   display: "inline-block",
							   background: "#fff",
							   color: "#5c5c5c",
							   fontWeight: 700,
							   fontSize: "1.2rem",
							   border: "4px solid #5c5c5c",
							   borderRadius: "18px",
							   padding: "18px 48px",
							   boxShadow: "6px 6px 0 #5c5c5c, 0 2px 12px rgba(0,0,0,0.08)",
							   textDecoration: "none",
							   transition: "transform 0.15s",
						   }}
						   onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
						   onMouseLeave={e => (e.currentTarget.style.transform = "")}
					   >
						   Learn More
					   </a>
				   </div>
				   <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: 12 }}>
					   <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#5c5c5c", fontWeight: 600, fontSize: "1.05rem" }}>
						   <FaRegStar size={22} style={{ color: "#ffe600" }} /> Free 14-day trial
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
