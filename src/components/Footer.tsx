import React from "react";
import { FaHome, FaBookOpen, FaListAlt, FaBlog, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer
                style={{
                    background: "#6d6d6d",
                    color: "#fff",
                    padding: "32px 0 0 0",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "64px",
                        maxWidth: "900px",
                        margin: "0 auto",
                        padding: "0 24px",
                    }}
                >
                    <div style={{ maxWidth: 220 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/Wisker.png"
                                alt="Wisker Logo"
                                width={32}
                                height={32}
                                style={{
                                    borderRadius: "8px",
                                    border: "2px solid #b3d1ff",
                                    background: "#f5faff",
                                }}
                                priority
                            />
                            <span style={{ fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1.1 }}>
                                Wisker
                            </span>
                        </div>
                        <p style={{ marginTop: 16, color: "#e0e0e0", fontSize: "1.25rem", lineHeight: 1.6 }}>
                            Making studying fun and effective with AI-powered learning tools.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: 12, color: "#fff" }}>Navigation</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#e0e0e0" }}>
                            <li>
                                <Link href="/" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <FaHome />Home
                                </Link>
                            </li>
                            <li><a href="#how-it-works" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaBookOpen />How It Works</a></li>
                            <li><a href="#features" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaListAlt />Features</a></li>
                            <li><a href="#blogs" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaBlog />Blogs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: 12, color: "#fff" }}>Contact</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#e0e0e0" }}>
                            <li><a href="mailto:info@wisker.app" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaEnvelope />info@wisker.app</a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=61577887210771" target="_blank" rel="noopener noreferrer" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaFacebook />Facebook</a></li>
                            <li><a href="https://www.linkedin.com/company/wisker/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: "#e0e0e0", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}><FaLinkedin />LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #888", margin: "32px 0 0 0" }} />
                <div style={{ textAlign: "center", padding: "18px 0 24px 0", color: "#e0e0e0", fontSize: "0.98rem" }}>
                    © 2025 Wisker. All rights reserved. Made with <span style={{ color: "#ff5a7a", fontSize: "1.1em" }}>♥</span> for students everywhere.
                </div>
            </footer>
        </>
    );
}
