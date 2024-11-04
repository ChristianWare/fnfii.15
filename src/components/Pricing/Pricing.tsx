"use client";

import { pricing } from "../../../lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Pricing.module.css";
import { useState } from "react";
// import animationData from "../../../public/lottie/pricing.json";
// import Lottie from "lottie-react";

interface Props {
  bgColor?: string;
  borderTop?: string;
}

const Pricing = ({ bgColor = "", borderTop = "" }: Props) => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section
      className={`${styles.container} ${styles[bgColor]} ${styles[borderTop]}`}
      id='pricing'
    >
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
            <h2 className={styles.heading}>Pricing</h2>

            <p className={styles.copy}>
              Subscription based pricing. No contracts. Pause or cancel whenever
              you&rsquo;d like.
            </p>
            <div className={styles.optionsBox}>
              <span className={styles.option}>Monthly</span>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input type='checkbox' className={styles.checkBox} />
                  <span
                    onClick={() => setIsMonthly(!isMonthly)}
                    className={styles.slider}
                  ></span>
                </label>
              </div>
              <span className={styles.option}>
                Annually <small>(Save 20%)</small>
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            {pricing.map((x) => (
              <div key={x.id} className={styles.priceContainer}>
                <div className={styles.contentParent}>
                  <div className={styles.pcTop}>
                    <h3 className={styles.planName}>{x.plan}</h3>
                  </div>
                  <div className={styles.pcBottom}>
                    <ul className={styles.features}>
                      {x.includes.map((y) => (
                        <li key={y.id} className={styles.feature}>
                          {y.feature}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                </div>
                <h6 className={styles.price}>
                  ${!isMonthly ? x.prices[0].price : x.prices[1].price}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
