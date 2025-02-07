"use client";

import styles from "./WhatWeDo.module.css";

import { motion } from "framer-motion";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";

const data = [
  {
    id: 1,
    title: "Platform Consultation & Selection",
    desc: "We build websites that help your online store reach new heights, combining speed, scalability, and style to make your business stand out.",
  },
  {
    id: 2,
    title: "UX/UI Design & Customization",
    desc: "Simplify your workflow with seamless order processing, real-time updates, and automated confirmations to keep your customers coming back.",
  },
  {
    id: 4,
    title: "Payment Gateway & Third-Party Integrations",
    desc: "Easily manage your store from anywhere with user-friendly tools that give you control over products, sales, and analytics—all in one place.",
  },
  {
    id: 3,
    title: "Store Setup & Product Management",
    desc: "Drive more sales with optimized user experiences, fast load times, and conversion-focused design that turns visitors into loyal customers.",
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading
            title='How we can be helpful'
            color='purple'
            dotColor='purple'
          />
          <h2 className={styles.heading}>
            Our <span className={styles.span}>E-commerce</span> Services
          </h2>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <motion.div key={x.id} className={styles.card}>
              <h3 className={styles.title}>{x.title}</h3>
            </motion.div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default WhatWeDo;
