"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
// import { motion } from "framer-motion";
import FalseButton from "../FalseButton/FalseButton";
import animationData from "../../../public/lottie/heroii.json";
import Lottie from "lottie-react";
import Usp from "../Usp/Usp";
import TopNav from "../TopNav/TopNav";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div
          // initial={{ y: -100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          className={styles.content}
        >
          <div className={styles.left}>
            <div className={styles.headingLottieBox}>
              <div className={styles.hlLeft}>
                <div className={styles.falseBtnContainer}>
                  <FalseButton
                    btnType='primary'
                    text='E-commerce Web Development Agency '
                  />
                </div>
                <h1 className={styles.heading}>
                  Unlock the secrets to{" "}
                  <span className={styles.span}>E-commerce</span> success
                  {/* <span className={styles.span}>E-commerce</span>{" "} */}
                </h1>
                <p className={styles.copy}>
                  We build custom online stores designed to elevate your brand,
                  engage your audience, and drive conversions.
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    text='Schedule Discovery Call'
                    href='/#schedule'
                    btnType='secondary'
                  />
                  <Button
                    text='Explore Our Services'
                    href='/#services'
                    btnType='primaryii'
                  />
                </div>
                <TopNav />
              </div>
              <div className={styles.lottieBox}>
                <Lottie
                  animationData={animationData}
                  className={styles.lottie}
                />
              </div>
            </div>

            <div className={styles.uspContainer}>
              <Usp />
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
