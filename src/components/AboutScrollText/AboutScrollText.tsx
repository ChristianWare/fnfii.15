/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import animationData from "../../../public/lottie/heroii.json";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "99.9%",
    desc: "Uptime for every e-commerce site we build",
  },
  {
    id: 2,
    title: "2X",
    desc: "Faster Website load times than industry standard",
  },
  {
    id: 3,
    title: "14",
    desc: "Average days to launch your e-commerce store",
  },
];

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutScrollText = () => {
  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className={styles.parent}
        >
          <h2 className={styles.heading}>
            What is <br /> <span className={styles.span}>Fonts & Footers?</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.left}>
              <FalseButton text='About Us' btnType='primary' />
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
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
