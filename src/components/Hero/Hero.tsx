"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import { motion } from "framer-motion";
import RotatingText from "../RotatingText/RotatingText";

const lines = ["We Build", "E-commerce websites", "the right way"];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.8,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 40,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const uspVariants = {
  hidden: { opacity: 0, x: 0, y: 40, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 2.4,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.div variants={container} initial='hidden' animate='visible'>
              {lines.map((line, index) => (
                <motion.h1
                  variants={child}
                  key={index}
                  className={`${styles.heading}
                        ${index === lines.length - 1 ? styles.lastLine : ""}`}
                >
                  {line}
                </motion.h1>
              ))}
            </motion.div>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={uspVariants}
            >
              <p className={styles.copy}>
                We Build Fast, Secure, and Scalable Online Stores for Ambitious
                Brands
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Get Your Free Consultation →'
                  href='/#contact'
                  btnType='secondary'
                />
                <Button
                  text='See Our Work'
                  href='/#projects'
                  btnType='primaryii'
                />
              </div>
            </motion.div>
          </div>
          <div className={styles.right}>
            <div className={styles.RotatingTextContainer}>
              <RotatingText text='Fonts & Footers • E-Commerce Specialists •' />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.uspContainer}>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={uspVariants}
            >
              <WhatWeDo />
            </motion.div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Hero;
