"use client";

import styles from "./WhatWeDo2.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import animationData from "../../../public/lottie/cta.json";
import animationData2 from "../../../public/lottie/email.json";
import animationData3 from "../../../public/lottie/pricing.json";
import animationData4 from "../../../public/lottie/hero.json";
import { AnimatePresence, motion } from "framer-motion";
import LayoutWrapper from "../LayoutWrapper";
// import FalseButton from "../FalseButton/FalseButton";
import SectionHeading from "../SectionHeading/SectionHeading";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const data = [
  {
    id: 3,
    animation: animationData3,
    title: "Maximize your revenue potential",
    desc: "Drive more sales with optimized user experiences, fast load times, and conversion-focused design that turns visitors into loyal customers.",
  },
  {
    id: 1,
    animation: animationData,
    title: "Optimized for mobile-first shoppers (70% of e-commerce traffic)",
    desc: "We build websites that help your online store reach new heights, combining speed, scalability, and style to make your business stand out.",
  },
  {
    id: 2,
    animation: animationData2,
    title: "PCI-compliant payment gateways integrated seamlessly",
    desc: "Simplify your workflow with seamless order processing, real-time updates, and automated confirmations to keep your customers coming back.",
  },
  {
    id: 4,
    animation: animationData4,
    title: "SEO structures built to rank product pages, not just blogs",
    desc: "Easily manage your store from anywhere with user-friendly tools that give you control over products, sales, and analytics—all in one place.",
  },
];

export default function WhatWeDo2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {/* <FalseButton
          text='How we can be helpful'
          btnType='primary'
        /> */}
        <SectionHeading
          title='How we can be helpful'
          color='purple'
          dotColor='purple'
        />
        <div className={styles.content}>
          <div className={styles.left}>
            {data.map((x, index) => (
              <div
                key={index}
                className={
                  activeIndex === index
                    ? `${styles.dataBox} ${styles.active}`
                    : styles.dataBox
                }
                onClick={() => setActiveIndex(index)}
              >
                <h3 className={styles.title}>{x.title}</h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={styles.desc}
                >
                  {x.desc}
                </motion.p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.lottieBox}
              >
                <Lottie
                  animationData={data[activeIndex].animation}
                  className={styles.lottie}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
