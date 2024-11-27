"use client";

import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import Problem from "@/components/Problem/Problem";
import Projects from "@/components/Projects/Projects";
import Solution from "@/components/Solution/Solution";
import Testimonials from "@/components/Testimonials/Testimonials";
import { homePageFaqs } from "../../lib/data";
import ContactHero from "@/components/ContactHero/ContactHero";
import PostHero from "@/components/PostHero/PostHero";
import Owner from "@/components/Owner/Owner";
import NewFaq from "@/components/NewFaq/NewFaq";
import FirstStep from "@/components/FirstStep/FirstStep";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Compare from "@/components/Compare/Compare";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Footerii from "@/components/Footerii/Footerii";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.getAllTasks);
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <AboutScrollText />
      <Problem />
      <Solution />
      <Owner />
      <EcommFeatures />
      <Compare />
      <PostHero />
      <HowItWorks />
      <Projects />
      <Pricing />
      <Testimonials />
      <FirstStep />
      <NewFaq mapData={homePageFaqs} />
      <ContactHero />
      <FinalCTA />
      <Footerii />
      <h1>All tasks in DB</h1>
      {tasks?.map((task) => (
        <div key={task._id}>
          <h2>
            {task.text} is completed: {task.isCompleted ? "true" : "false"}
          </h2>
        </div>
      ))}
    </main>
  );
}
