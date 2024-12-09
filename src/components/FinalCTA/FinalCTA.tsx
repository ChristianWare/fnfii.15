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
          <div className={styles.left}></div>
          <div className={styles.middle}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
            <h2 className={styles.heading}>
              Win at the game <br /> called{" "}
              <span className={styles.span}>e-commerce</span>
            </h2>
            <div className={styles.pattern}></div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
