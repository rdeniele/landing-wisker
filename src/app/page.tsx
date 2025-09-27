// import Image from "next/image";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SignUpCTA from "@/components/sections/SignUpCTA";
// import Blogs from "@/components/sections/Blogs";
import CommunitySection from "@/components/sections/CommunitySection";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <Hero />
      <CommunitySection />
      <Features />
      <HowItWorks />
      <Pricing/>
      {/* <Blogs /> */}
      <SignUpCTA />
    </main>
  );
}
