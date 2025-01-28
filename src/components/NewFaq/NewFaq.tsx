/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./NewFaq.module.css";
import { FC, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import Plus from "../../../public/icons/plus.svg";
import Image from "next/image";
import FAQImage from "../../../public/images/faq.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

interface Props {
  mapData: any;
}

const NewFaq: FC<Props> = ({ mapData }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Frequently Asked{" "}
              <motion.span
                variants={fadeIn("", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true }}
                className={styles.headingii}
              >
                Questions
              </motion.span>
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bLeft}>
              <div className={styles.imgContianer}>
                <Image src={FAQImage} alt='' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.bRight}>
              {mapData.slice(0, 4).map((x: any, i: number) => (
                <div
                  key={x.id}
                  className={`${styles.qaContainer} ${
                    selected === i ? styles.active : ""
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    {selected === i ? (
                      <Plus
                        className={styles.iconFlip}
                        width={35}
                        height={35}
                      />
                    ) : (
                      <Plus className={styles.icon} width={30} height={30} />
                    )}
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  <div
                    className={
                      selected === i
                        ? styles.answerContainer + " " + styles.show
                        : styles.answerContainer
                    }
                  >
                    <div className={styles.answerbox}>
                      <div></div>
                      <p className={styles.answer} lang='en'>
                        {x.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default NewFaq;
