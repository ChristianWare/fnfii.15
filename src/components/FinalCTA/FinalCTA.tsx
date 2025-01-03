"use client";

import styles from "./FinalCTA.module.css";
import LayoutWrapper from "../LayoutWrapper";
import animationData from "../../../public/lottie/hero.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FinalCTA = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.lottieBox}>
            <Lottie animationData={animationData} className={styles.lottie} />
          </div>
          <h2 className={styles.heading}>
            We build
            <br />
            E-commerce websites <br />
            <span className={styles.span}> the right way.</span>
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
