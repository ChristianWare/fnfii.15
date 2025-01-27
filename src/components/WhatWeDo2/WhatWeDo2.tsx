"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import animationData from "../../../public/lottie/cta.json";
import animationData2 from "../../../public/lottie/email.json";
import animationData3 from "../../../public/lottie/pricing.json";
import animationData4 from "../../../public/lottie/hero.json";
import styles from "./WhatWeDo2.module.css";
import LayoutWrapper from "../LayoutWrapper";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const data = [
  {
    id: 1,
    animation: animationData,
    title: "Lift your brand to new heights",
    desc: "We build websites that help your online store reach new heights, combining speed, scalability, and style to make your business stand out.",
  },
  {
    id: 2,
    animation: animationData2,
    title: "Effortlessly manage your orders",
    desc: "Simplify your workflow with seamless order processing, real-time updates, and automated confirmations to keep your customers coming back.",
  },
  {
    id: 4,
    animation: animationData4,
    title: "Relax with an intuitive dashboard",
    desc: "Easily manage your store from anywhere with user-friendly tools that give you control over products, sales, and analytics—all in one place.",
  },
  {
    id: 3,
    animation: animationData3,
    title: "Maximize your revenue potential",
    desc: "Drive more sales with optimized user experiences, fast load times, and conversion-focused design that turns visitors into loyal customers.",
  },
];

export default function WhatWeDo2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>What we do</h2>
            {data.map((x, index) => (
              <div key={index} className={styles.dataBox}>
                <h3>{x.title}</h3>
                <p>{x.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie
                animationData={data[activeIndex].animation}
                className={styles.lottie}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
