"use client";

import { InlineWidget } from "react-calendly";
import styles from "./Calendly.module.css";

const Calendly = () => {
  return (
    <section className={styles.container}>
      <div className={styles.calBox}>
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
    </section>
  );
};
export default Calendly;
