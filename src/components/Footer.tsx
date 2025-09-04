import React from "react";
import Image from "next/image";


export default function Footer() {
        return (
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
                        <h4 style={{ fontWeight: 600, marginBottom: 12, color: "#fff" }}>Product</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#e0e0e0" }}>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Features</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Pricing</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>API</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: 12, color: "#fff" }}>Company</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#e0e0e0" }}>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>About</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Blog</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Careers</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: 12, color: "#fff" }}>Support</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#e0e0e0" }}>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Help Center</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Community</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Privacy</a></li>
                            <li><a href="#" style={{ color: "#e0e0e0", textDecoration: "none" }}>Terms</a></li>
                        </ul>
                    </div>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #888", margin: "32px 0 0 0" }} />
                <div style={{ textAlign: "center", padding: "18px 0 24px 0", color: "#e0e0e0", fontSize: "0.98rem" }}>
                    © 2025 Wisker. All rights reserved. Made with <span style={{ color: "#ff5a7a", fontSize: "1.1em" }}>♥</span> for students everywhere.
                </div>
            </footer>
        );
}
