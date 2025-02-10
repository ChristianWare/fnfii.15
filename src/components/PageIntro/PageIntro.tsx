"use client";

import { fadeIn } from "../../../animation/variants";
import LayoutWrapper from "../LayoutWrapper";
import ProductPreview from "../ProductPreview/ProductPreview";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./PageIntro.module.css";
import { motion } from "framer-motion";

interface Props {
  title: string;
  title2?: string;
  copy?: string;
  sectionHeading: string;
}

export default function PageIntro({
  sectionHeading,
  title,
  title2,
  copy,
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
              <SectionHeading
                title={sectionHeading}
                color='white'
                dotColor='whiteDot'
              />
              <h1 className={styles.heading}>
                {title} <br />
                <span className={styles.headingii}>{title2}</span>
              </h1>
              <p className={styles.copy}>{copy}</p>
            </div>
            <div className={styles.right}>
              <ProductPreview />
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
