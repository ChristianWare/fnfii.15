/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
// import animationData from "../../../public/lottie/agency.json";
// import Lottie from "lottie-react";
// import Experience from "../Experience/Experience";
import FalseButton from "../FalseButton/FalseButton";

const data = [
  {
    id: 1,
    title: "7+",
    desc: "Here are some thing you can include in the description area so that you can have a say. ",
  },
  {
    id: 2,
    title: "4*",
    desc: "Here are some thing you can include in the description area so that you can have a say. ",
  },
  {
    id: 3,
    title: "40+",
    desc: "Here are some thing you can include in the description area so that you can have a say. ",
  },
];

const AboutScrollText = () => {
  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <FalseButton text='About us' btnType='primary' />
              <h2 className={styles.heading}>
                What exactly is Fonts & Footers?
              </h2>
            </div>
            <p className={styles.copy}>
              Fonts & Footers is an e-commerce web development agency. We&apos;re experts at blending the latest
              technology with creative ideas for top-notch results. By working
              with us, you get personal care, support, and a website that boosts
              engagement and sales. We operate out of sunny Phoenix, AZ.
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
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
