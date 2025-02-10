import PageIntro from "@/components/PageIntro/PageIntro";
import animationData from "../../../public/lottie/heroii.json";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        title='full spectrum of our'
        title2='E-commerce Development'
        sectionHeading='our services'
        copy="Fonts & Footers is an e-commerce web development agency.
                We're experts at blending the latest technology with
                creative ideas for top-notch results."
        animationData={animationData}
      />
      <EcommFeatures />
    </main>
  );
}
