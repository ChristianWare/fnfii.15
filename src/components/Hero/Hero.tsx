"use client";

// import dynamic from "next/dynamic";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import FalseButton from "../FalseButton/FalseButton";
// import animationData from "../../../public/lottie/heroii.json";
// import Usp from "../Usp/Usp";
import TopNav from "../TopNav/TopNav";
import Nav from "../Nav/Nav";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

// Dynamically import Lottie with SSR disabled
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.headingLottieBox}>
              <div className={styles.hlLeft}>
                <div className={styles.falseBtnContainer}>
                  <FalseButton btnType='primary' text='Welcome!' />
                </div>
                <h1 className={styles.heading}>
                  We build <br />
                  <span className={styles.span}>E-commerce</span> stores <br />
                  for ambitious companies
                </h1>
                <p className={styles.copy}>
                  We build custom online stores designed to elevate your brand,
                  engage your audience, and drive conversions.
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    text='Start a project'
                    href='/#contact'
                    btnType='secondary'
                  />
                  <Button
                    text='See Our Work'
                    href='/#projects'
                    btnType='primaryii'
                  />
                </div>
                <TopNav />
              </div>
             
            </div>

            <div className={styles.uspContainer}>
              <WhatWeDo />
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Hero;
