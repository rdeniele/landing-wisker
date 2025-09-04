"use client";
import React from "react";
import Image from "next/image";

const logoUrl = "/Wisker.png"; // Local logo in public directory

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px",
        borderBottom: "2px solid #b3d1ff",
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image
            src={logoUrl}
            alt="Wisker Logo"
            width={40}
            height={40}
            style={{
              borderRadius: "8px",
              border: "2px solid #b3d1ff",
              background: "#f5faff",
            }}
        />
        <span style={{ fontWeight: 500, fontSize: "1.2rem", color: "#444" }}>
          Wisker
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <a
          href="/login"
          style={{
            color: "#444",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: "8px",
            transition: "background 0.2s, color 0.2s, transform 0.2s",
            cursor: "pointer",
            fontWeight: 500,
            position: "relative",
            overflow: "hidden",
            border: "2px solid transparent",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#e6f0ff";
            e.currentTarget.style.color = "#222";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.border = "2px solid #b3d1ff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "";
            e.currentTarget.style.color = "#444";
            e.currentTarget.style.transform = "";
            e.currentTarget.style.border = "2px solid transparent";
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
        >
          Login
        </a>
        <a
          href="/signup"
          style={{
            padding: "6px 18px",
            background: "#b3d1ff",
            color: "#222",
            borderRadius: "12px",
            fontWeight: 500,
            border: "2px solid #444",
            textDecoration: "none",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            transition: "background 0.2s, color 0.2s, transform 0.2s",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#8bb6f7";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#b3d1ff";
            e.currentTarget.style.color = "#222";
            e.currentTarget.style.transform = "";
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
        >
          Sign Up Free
        </a>
      </div>
    </nav>
  );
}