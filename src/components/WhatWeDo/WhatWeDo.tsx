"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./WhatWeDo.module.css";
import animationData from "../../../public/lottie/cta.json";
import animationData2 from "../../../public/lottie/email.json";
import animationData3 from "../../../public/lottie/pricing.json";
import animationData4 from "../../../public/lottie/hero.json";
import Lottie from "lottie-react";

const data = [
  {
    id: 1,
    animation: animationData,
    title: "Profile thickness",
    desc: "Our proprietary fence profiles, created without standard",
  },
  {
    id: 2,
    animation: animationData2,
    title: "Profile thickness",
    desc: "Our proprietary fence profiles, created without standard",
  },
  {
    id: 3,
    animation: animationData3,
    title: "Profile thickness",
    desc: "Our proprietary fence profiles, created without standard",
  },
  {
    id: 4,
    animation: animationData4,
    title: "Profile thickness",
    desc: "Our proprietary fence profiles, created without standard",
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            What we can do <br /> for your online store
          </h2>
        </div>
        <div className={styles.bottom}>
          {/* <div className={styles.lottieBox}>
            <Lottie animationData={animationData} className={styles.lottie} />
          </div> */}
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <div className={styles.lottieBox}>
                <Lottie animationData={x.animation} className={styles.lottie} />
              </div>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.desc}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default WhatWeDo;
