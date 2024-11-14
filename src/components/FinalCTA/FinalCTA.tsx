"use client";

import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";
import animationData from "../../../public/lottie/hero.json";
import Lottie from "lottie-react";

const FinalCTA = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.middle}>
            <h2 className={styles.heading}>
              Win at the game <br /> called e-commerce
            </h2>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule Discovery Call'
                href='/#schedule'
                btnType='secondary'
              />
              <Button
                text='Our Services'
                href='/#services'
                btnType='primaryii'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottieii} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
