"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutScrollText.module.css";
import animationData from "../../../public/lottie/agency.json";
import Lottie from "lottie-react";
// import Experience from "../Experience/Experience";
import FalseButton from "../FalseButton/FalseButton";

const AboutScrollText = () => {
  return (
    <section className={styles.bgColor} id='about'>
      {" "}
      {/* Place id here */}
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='About Us' />
            </div>
            <h2 className={`${styles.heading} h2v2`}>
              What exactly is Fonts & Footers?
            </h2>
            <p className={styles.text}>
              Fonts & Footers is a digital agency focusing on web design, web
              development, and SEO. We&apos;re experts at blending the latest
              technology with creative ideas for top-notch results. By working
              with us, you get personal care, support, and a website that boosts
              engagement and sales. We operate out of sunny Phoenix, AZ.
            </p>
            <br />
            <p className={styles.text}>
              We use cutting-edge technology to craft websites that outperform
              those built on platforms like Wordpress, Wix, or Godaddy, which
              often rely on older, slower, and outdated technology. Our approach
              involves using pure HTML, CSS, and Javascript code, ensuring a
              sleek and efficient website.
            </p>
          </div>
        </div>
        {/* <Experience /> */}
      </LayoutWrapper>
    </section>
  );
};
export default AboutScrollText;
