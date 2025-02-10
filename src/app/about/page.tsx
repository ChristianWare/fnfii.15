import PageIntro from "@/components/PageIntro/PageIntro";
import animationData from "../../../public/lottie/hero.json";

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
    </main>
  );
}
