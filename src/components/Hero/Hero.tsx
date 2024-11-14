"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
// import { motion } from "framer-motion";
import FalseButton from "../FalseButton/FalseButton";
import animationData from "../../../public/lottie/heroii.json";
import Lottie from "lottie-react";
import Usp from "../Usp/Usp";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div
          // initial={{ y: -100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          className={styles.content}
        >
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton
                btnType='primary'
                text='E-commerce Web Development Agency '
              />
            </div>
            <h1 className={styles.heading}>
              Win the game called{" "}
              <span className={styles.span}>E-commerce</span>{" "}
            </h1>
            <p className={styles.copy}>
              We serve as your ‘on-demand CTO’ → A boutique consultancy for
              consumer and retail brands that seek digital success
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule Discovery Call'
                href='/#schedule'
                btnType='secondary'
              />
              <Button
                text='Our Services'
                href='/#services'
                btnType='primaryiii'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
        </div>
        <div className={styles.uspContainer}>
          <Usp />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
