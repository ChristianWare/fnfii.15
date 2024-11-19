"use client";

import { pricing } from "../../../lib/data";
import Button from "../Button/Button";
import FalseButton from "../FalseButton/FalseButton";
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
            <FalseButton
              btnType='primary'
              // text='Looking for an e-commerce website that drives results?'
              text='Our Plans'
            />

            <h2 className={styles.heading}>Choose your Package</h2>

            <p className={styles.copy}>
              Our plans are clear and open, no shocks or caps. Help is always
              here when you want it. Subscription based pricing. No contracts.
              Pause or cancel whenever you&rsquo;d like.
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
                    {/* <h3 className={styles.planName}>{x.plan}</h3> */}
                    <h6 className={styles.price}>
                      ${!isMonthly ? x.prices[0].price : x.prices[1].price}
                    </h6>
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
              </div>
            ))}
          </div>
          <div className={styles.custommize}>
            <div className={styles.customizeLeft}>
              <h3>Looking for a customized package?</h3>
              <p>
                If our plans don’t match your project or you want to talk it
                over first, let’s have a call or lets talk while having a
                coffee.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Book a meeting'
                  href='/#schedule'
                  btnType='secondary'
                />
              </div>
            </div>
            <div className={styles.pattern}></div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
