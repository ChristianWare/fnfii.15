"use client";

import styles from "./Faqsiii.module.css";
import { FC, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import Plus from "../../../public/icons/plus.svg";
import Image from "next/image";
import FAQImage from "../../../public/images/faq.png";
import ScrollText from "../ScrollText/ScrollText";

interface Props {
  mapData: any;
  text?: string;
  bgColor?: string;
}

const Faqsiii: FC<Props> = ({ bgColor = "", mapData, text = "" }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };

  return (
    <section className={`${styles.container} ${styles[bgColor]}`} id='faqs'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>You may have wondered</h2>
            <p className={styles.copy}>
              Here are some common questions asked by potential employers. If
              you do not see your question here feel free to reach out.
            </p>
            <div className={styles.imgContianer}>
              <Image src={FAQImage} alt='' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.bottom}>
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
                    <Plus className={styles.iconFlip} width={35} height={35} />
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
        <div className={styles.scrollTextContainer}>
          <ScrollText />
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Faqsiii;
