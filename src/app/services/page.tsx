"use client";

import PageIntro from "@/components/PageIntro/PageIntro";
import animationData from "../../../public/lottie/heroii.json";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
// import Delivery from "@/components/Delivery/Delivery";
// import Experience from "@/components/Experience/Experience";
import PostHero from "@/components/PostHero/PostHero";
// import PreAbout from "@/components/PreAbout/PreAbout";
import PremiumHero from "@/components/PremiumHero/PremiumHero";
import Usp from "@/components/Usp/Usp";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import FadeText from "@/components/FadeText/FadeText";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        title='full spectrum of our'
        title2='E-commerce services'
        sectionHeading='our services'
        copy='At Fonts & Footers, we believe that an exceptional online store goes beyond good design—it’s about creating a seamless, enjoyable shopping experience that drives real revenue. We specialize in end-to-end e-commerce website development, ensuring your brand stands out in a competitive market, attracts the right customers, and converts casual browsers into loyal buyers.'
        animationData={animationData}
      />
      <FadeText
        title='Why E-Commerce?'
        subheading='Online Shopping Isn’t the Future—It’s the Now.'
        textContent='With online sales surging, an optimized e-commerce presence is essential for broader reach, 24/7 operations, and sustainable growth in a fast-evolving digital landscape.'
      />
      <EcommFeatures />
      <HowItWorks />
      <PremiumHero />
      {/* <Usp /> */}
      <Pricing />
      <PostHero />
      <FinalCTA />
    </main>
  );
}
