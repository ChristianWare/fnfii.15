"use client";

import { InlineWidget } from "react-calendly";
import styles from "./Calendly.module.css";
import LayoutWrapper from "../LayoutWrapper";
import CalendlyImage from "../../../public/images/calendly.png";
import Image from "next/image";

const Calendly = () => {
  return (
    <section className={styles.container} id='schedule'>
      <LayoutWrapper>
        <div className={styles.calBox}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Schedule a free discovery call with us today
            </h2>
            <div className={styles.imgContainer}>
              <Image src={CalendlyImage} fill alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.iframeWrapper}>
              <InlineWidget
                url='https://calendly.com/fontsandfooters/discovery-call'
                styles={{
                  height: "700px",
                }}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Calendly;
