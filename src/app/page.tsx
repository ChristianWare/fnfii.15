"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero/Hero";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Explain from "@/components/Explain/Explain";
import Solution from "@/components/Solution/Solution";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import PostHero from "@/components/PostHero/PostHero";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
import Problem from "@/components/Problem/Problem";
import Owner from "@/components/Owner/Owner";
import Pricing from "@/components/Pricing/Pricing";
import WhatWeDo2 from "@/components/WhatWeDo2/WhatWeDo2";
// import Calendly from "@/components/Calendly/Calendly";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <WhatWeDo2 />
        <AboutScrollText />
        <Problem />
        <Explain />
        <Solution />
        <EcommFeatures />
        <HowItWorks />
        <Pricing />
        {/* <Calendly /> */}
        <Owner />
        <PostHero />
        <FinalCTA />
      </main>
    </ReactLenis>
  );
}
