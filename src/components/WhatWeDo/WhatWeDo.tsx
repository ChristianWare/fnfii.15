"use client";

import styles from "./WhatWeDo.module.css";
import animationData from "../../../public/lottie/cta.json";
import animationData2 from "../../../public/lottie/email.json";
import animationData3 from "../../../public/lottie/pricing.json";
import animationData4 from "../../../public/lottie/hero.json";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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

const WhatWeDo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        {data.map((x) => (
          <motion.div key={x.id} className={styles.card}>
            <div className={styles.lottieBox}>
              <Lottie animationData={x.animation} className={styles.lottie} />
            </div>
            <p className={styles.title}>{x.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default WhatWeDo;
