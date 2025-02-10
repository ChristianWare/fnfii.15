/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./PageIntro.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Props {
  title: string;
  title2?: string;
  copy?: string;
  sectionHeading: string;
  animationData: any;
}

export default function PageIntro({
  sectionHeading,
  title,
  title2,
  copy,
  animationData,
}: Props) {
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
              <div className={styles.sectionHeaderContainer}>
                <SectionHeading
                  title={sectionHeading}
                  color='green'
                  dotColor='greenDot'
                />
              </div>
              <h1 className={styles.heading}>
                {title} <br />
                <span className={styles.headingii}>{title2}</span>
              </h1>
              <p className={styles.copy}>{copy}</p>
            </div>
            <div className={styles.right}>
              <div className={styles.rightContent}>
                <div className={styles.lottieBox}>
                  <Lottie
                    animationData={animationData}
                    className={styles.lottie}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
