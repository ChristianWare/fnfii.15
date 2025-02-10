"use client";

import PageIntro from "@/components/PageIntro/PageIntro";
import animationData from "../../../public/lottie/hero.json";
import WhatWeDo2 from "@/components/WhatWeDo2/WhatWeDo2";
import Problem from "@/components/Problem/Problem";
import Owner from "@/components/Owner/Owner";
import Compare from "@/components/Compare/Compare";
import FirstStep from "@/components/FirstStep/FirstStep";
// import NewFaq from "@/components/NewFaq/NewFaq";
// import { homePageFaqs } from "../../../lib/data";

export default function page() {
  return (
    <main>
      <PageIntro
        title='About'
        title2='Fonts & Footers'
        sectionHeading='our story'
        copy="Fonts & Footers is an e-commerce web development agency.
                We're experts at blending the latest technology with
                creative ideas for top-notch results."
        animationData={animationData}
      />
      <Owner />
      <Problem />
      <WhatWeDo2 />
      <Compare />
      {/* <NewFaq mapData={homePageFaqs} /> */}
      <FirstStep />
      {/* <Pricing /> */}
      {/* <NewFaq mapData={homePageFaqs} /> */}
      {/* <EcommFeatures /> */}
      {/* <Calendly /> */}
      {/* <ContactHero /> */}
    </main>
  );
}
