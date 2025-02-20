/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./AboutScrollText.module.css";
// import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import animationData from "../../../public/lottie/heroii.json";
import SectionHeading from "../SectionHeading/SectionHeading";
// import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import animationData1 from "../../../public/lottie/cta.json";
import animationData2 from "../../../public/lottie/email.json";
import animationData3 from "../../../public/lottie/pricing.json";
import animationData4 from "../../../public/lottie/hero.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const data = [
  {
    id: 1,
    title: "Who we are",
    desc: "Uptime for every e-commerce site we build",
    animation: animationData3,
  },
  {
    id: 2,
    title: "What we do",
    desc: "Faster Website load times than industry standard",
    animation: animationData,
  },
  {
    id: 3,
    title: "Why we do it ",
    desc: "Average days to launch your e-commerce store",
    animation: animationData2,
  },
  {
    id: 4,
    title: "What Sets Us Apart",
    desc: "Uptime for every e-commerce site we build",
    animation: animationData4,
  },
  {
    id: 5,
    title: "Mission",
    desc: "Faster Website load times than industry standard",
    animation: animationData1,
  },
  {
    id: 6,
    title: "Culture",
    desc: "Average days to launch your e-commerce store",
    animation: animationData3,
  },
];

export default function AboutScrollText() {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <div
          className={styles.parent}
        >
          <div className={styles.top}>
            <SectionHeading
              title='About Us'
              color='purple'
              dotColor='purpleDot'
            />
            <h2 className={styles.heading}>
              <span className={styles.span}> Fonts & Footers</span>
            </h2>
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.lottieBox}>
                <Lottie
                  animationData={animationData}
                  className={styles.lottie}
                />
              </div>
              <p className={styles.copy}>
                Fonts & Footers is an e-commerce web development agency.
                We&apos;re experts at blending the latest technology with
                creative ideas for top-notch results. By working with us, you
                get personal care, support, and a website that boosts engagement
                and sales. We operate out of sunny Phoenix, AZ.
              </p>
            </div>
            <div className={styles.right}>
              {data.map((x: any) => (
                <div className={styles.card} key={x.id}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
