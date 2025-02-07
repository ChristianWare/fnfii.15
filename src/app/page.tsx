"use client";

import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footerii from "@/components/Footerii/Footerii";
import Explain from "@/components/Explain/Explain";
// import Owner from "@/components/Owner/Owner";
// import HowItWorks from "@/components/HowItWorks/HowItWorks";
// import { homePageFaqs } from "../../lib/data";
// import NewFaq from "@/components/NewFaq/NewFaq";
// import Compare from "@/components/Compare/Compare";
// import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
// import Problem from "@/components/Problem/Problem";
// import Solution from "@/components/Solution/Solution";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import ContactHero from "@/components/ContactHero/ContactHero";
// import PostHero from "@/components/PostHero/PostHero";
// import FirstStep from "@/components/FirstStep/FirstStep";
// import Calendly from "@/components/Calendly/Calendly";
// import WhatWeDo2 from "@/components/WhatWeDo2/WhatWeDo2";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <Explain />
        <AboutScrollText />
        <Projects />
        {/* <HowItWorks /> */}
        <Pricing />
        {/* <Owner /> */}
        {/* <NewFaq mapData={homePageFaqs} /> */}
        <FinalCTA />
        <Footerii />
        {/* <WhatWeDo2 /> */}
        {/* <WhatWeDo /> */}
        {/* <EcommFeatures /> */}
        {/* <Compare /> */}
        {/* <Problem /> */}
        {/* <Solution /> */}
        {/* <PostHero /> */}
        {/* <Testimonials /> */}
        {/* <FirstStep /> */}
        {/* <Calendly /> */}
        {/* <ContactHero /> */}
      </main>
    </ReactLenis>
  );
}
