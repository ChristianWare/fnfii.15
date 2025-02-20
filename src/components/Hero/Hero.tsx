"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import RotatingText from "../RotatingText/RotatingText";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className={styles.parent}
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.RotatingTextContainer}>
                <RotatingText
                  text='Fonts & Footers • E-Commerce Specialists •'
                  color='tan'
                />
              </div>
              <h1 className={styles.heading}>
                We build <br />
                e-commerce websites <br />
                <span className={styles.headingii}>the right way.</span>
              </h1>

              <p className={styles.copy}>
                We Build Fast, Secure, and Scalable Online Stores for Ambitious
                Brands.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Learn more'
                  href='/#contact'
                  btnType='primaryiii'
                  arrow
                />
              </div>
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};

export default Hero;
