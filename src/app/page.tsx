"use client";

import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import Owner from "@/components/Owner/Owner";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Compare from "@/components/Compare/Compare";
import Footerii from "@/components/Footerii/Footerii";
import Explain from "@/components/Explain/Explain";
import { ReactLenis } from "@studio-freight/react-lenis";
// import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
// import HowItWorks from "@/components/HowItWorks/HowItWorks";
// import Problem from "@/components/Problem/Problem";
// import Solution from "@/components/Solution/Solution";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import { homePageFaqs } from "../../lib/data";
// import ContactHero from "@/components/ContactHero/ContactHero";
// import PostHero from "@/components/PostHero/PostHero";
// import NewFaq from "@/components/NewFaq/NewFaq";
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
        {/* <WhatWeDo /> */}
        <Owner />
        <EcommFeatures />
        <Projects />
        <Pricing />
        <Compare />
        <FinalCTA />
        <Footerii />
        {/* <Problem /> */}
        {/* <Solution /> */}
        {/* <WhatWeDo2 /> */}
        {/* <PostHero /> */}
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        {/* <FirstStep /> */}
        {/* <NewFaq mapData={homePageFaqs} /> */}
        {/* <Calendly /> */}
        {/* <ContactHero /> */}
      </main>
    </ReactLenis>
  );
}
