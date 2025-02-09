"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import ProductPreview from "../ProductPreview/ProductPreview";
import SectionHeading from "../SectionHeading/SectionHeading";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Nav />
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
              <SectionHeading
                title='E-commerce Web Developer'
                color='white'
                dotColor='whiteDot'
              />

              <h1 className={styles.heading}>
                We build <br />
                e-commerce <br /> websites <br />
                <span className={styles.headingii}>the right way.</span>
              </h1>

              <div>
                {/* <p className={styles.copy}>
                  We Build Fast, Secure, and Scalable Online Stores for
                  Ambitious Brands.
                </p> */}
                <div className={styles.btnContainer}>
                  <Button
                    text='Book Free Consultation'
                    href='/#contact'
                    btnType='primaryiii'
                    arrow
                  />
                  <Button
                    text='See Our Work'
                    href='/#projects'
                    btnType='primaryiv'
                  />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {/* <div className={styles.RotatingTextContainer}>
                <RotatingText
                  text='Fonts & Footers • E-Commerce Specialists •'
                  color='tan'
                />
              </div> */}
              <ProductPreview />
            </div>
          </div>
          {/* <div className={styles.bottom}>
            <div className={styles.uspContainer}>
              <div>
                <WhatWeDo />
              </div>
            </div>
          </div> */}
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};

export default Hero;
