"use client";

import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";
import animationData from "../../../public/lottie/cta.json";
import Lottie from "lottie-react";

const CallToAction = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.lottieBox}>
            <Lottie animationData={animationData} className={styles.lottie} />
          </div>
        </div>
        <div className={styles.bottom}>
          <h2 className={styles.heading}>
            Let your online store take flight with <br /> Fonts & Footers
          </h2>
          <p className={styles.topCopy}>
            Boost your online sales with secure, user-friendly, and scalable
            e-commerce websites.
          </p>
          <div className={styles.btnContainer}>
            <Button
              text='Contact Us'
              href='/contact'
              btnType='secondary'
              arrow
            />
            <Button
              text='See All Services'
              href='/services'
              btnType='primaryiii'
              arrow
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </LayoutWrapper>
    </section>
  );
};

export default CallToAction;
