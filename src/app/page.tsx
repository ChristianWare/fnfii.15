"use client";

import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import Problem from "@/components/Problem/Problem";
import Projects from "@/components/Projects/Projects";
import Solution from "@/components/Solution/Solution";
// import Testimonials from "@/components/Testimonials/Testimonials";
import { homePageFaqs } from "../../lib/data";
import ContactHero from "@/components/ContactHero/ContactHero";
import PostHero from "@/components/PostHero/PostHero";
import Owner from "@/components/Owner/Owner";
import NewFaq from "@/components/NewFaq/NewFaq";
// import FirstStep from "@/components/FirstStep/FirstStep";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Compare from "@/components/Compare/Compare";
import Footerii from "@/components/Footerii/Footerii";
// import Calendly from "@/components/Calendly/Calendly";
// import WhatWeDo2 from "@/components/WhatWeDo2/WhatWeDo2";
import Explain from "@/components/Explain/Explain";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <WhatWeDo2 /> */}
      <Explain />
      <Projects />
      <AboutScrollText />
      <Problem />
      <Solution />
      <Owner />
      <Compare />
      <PostHero />
      <HowItWorks />
      <Pricing />
      <EcommFeatures />
      {/* <Testimonials /> */}
      {/* <FirstStep /> */}
      <NewFaq mapData={homePageFaqs} />
      {/* <Calendly /> */}
      <ContactHero />
      <FinalCTA />
      <Footerii />
    </main>
  );
}
