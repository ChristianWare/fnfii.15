"use client";

import styles from "./FinalCTA.module.css";
import RotatingText from "../RotatingText/RotatingText";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const FinalCTA = () => {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <motion.div
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className={styles.parentContent}
      >
        <div className={styles.content}>
          <div className={styles.RotatingTextContainer}>
            <RotatingText text='Fonts & Footers • E-Commerce Specialists •' />
          </div>
          <h2 className={styles.heading}>
            We build
            <br />
            E-commerce websites <br />
            <span className={styles.span}> the right way.</span>
          </h2>
        </div>
      </motion.div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default FinalCTA;
