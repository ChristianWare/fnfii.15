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
        <div className={styles.calBox} id='schedule'>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Ready to get started? Scehdule a free
              discovery call with us today
            </h2>
            <div className={styles.imgContainer}>
              <Image src={CalendlyImage} fill alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <InlineWidget
              url='https://calendly.com/fontsandfooters/discovery-call'
              styles={{
                height: "900px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Calendly;
