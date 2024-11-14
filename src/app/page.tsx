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
// import Calendly from "@/components/Calendly/Calendly";
import ContactHero from "@/components/ContactHero/ContactHero";
import PostHero from "@/components/PostHero/PostHero";
import Owner from "@/components/Owner/Owner";
import CallToAction from "@/components/CallToAction/CallToAction";
import NewFaq from "@/components/NewFaq/NewFaq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <EcommFeatures />
      <AboutScrollText />
      <Owner />
      <PostHero />
      <HowItWorks />
      <Projects />
      <Pricing bgColor='tan' />
      <Testimonials />
      <NewFaq mapData={homePageFaqs} />
      <ContactHero />
      <CallToAction />
    </main>
  );
}

// Website should show clear information about what clients can expect when they work with you. If Done right, people will show up ready to work with you....

// Working with a web developer is not a common thing, so we need to show potential clients what the process of working with us looks like.....
