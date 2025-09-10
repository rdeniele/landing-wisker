// import Image from "next/image";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SignUpCTA from "@/components/sections/SignUpCTA";
import Blogs from "@/components/sections/Blogs";

export default function Home() {
  return (
    <>
  <Hero />
  <Features />
  <HowItWorks />
  <Blogs />
  <SignUpCTA />
    </>
  );
}
