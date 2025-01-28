"use client";

import styles from "./Problem.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Problem = () => {
  const data = [
    {
      title: "Slow Page Loading Times",
      description:
        "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
    },
    {
      title: "Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "Complicated Checkout Process",
      description:
        "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
    },
    {
      title: "Low Search Engine Visibility",
      description:
        "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
    },
    {
      title: "Poor Inventory Management",
      description:
        "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
    },
  ];

  return (
    <section className={styles.container} id='problems'>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.problemContainer}>
            <motion.h2
              variants={fadeIn("top", 0.3)}
              // variants={fadeIn("down", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true }}
              className={styles.heading}
            >
              Problems we solve
            </motion.h2>
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.description}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
