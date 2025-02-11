import PageIntro from "@/components/PageIntro/PageIntro";
import animationData from "../../../public/lottie/reviews.json";
import Projects from "@/components/Projects/Projects";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function WorksPage() {
  return (
    <main>
      <PageIntro
        title='See our E-commerce websites'
        title2='Come to life'
        sectionHeading='our work'
        copy='Delivering consistently high-quality work across different complexity, industries and design styles. No templates. Handmade only.'
        animationData={animationData}
      />
      <Projects />
      <FinalCTA />
    </main>
  );
}
