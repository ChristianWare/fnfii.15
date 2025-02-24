"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";

export default function Hero() {
  // Use a typed ref for the element to be animated
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Update your useGSAP animation code
  useGSAP(() => {
    if (!headingRef.current) return;

    const heroText = new SplitType(headingRef.current, { types: "chars" });

    // Immediately reveal parent after splitting
    gsap.set(headingRef.current, { visibility: "visible" });

    // Start characters fully hidden and offscreen
    gsap.set(heroText.chars, {
      y: 150,
      opacity: 0, // Add opacity control for extra safety
    });

    gsap.to(heroText.chars, {
      y: 0,
      opacity: 1, // Fade in while moving
      duration: 1,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.05,
    });
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.RotatingTextContainer}>
                <RotatingText
                  text='Fonts & Footers • E-Commerce Specialists •'
                  color='tan'
                />
              </div>

              {/* Note the direct ref on the h1 */}
              {/* Note: If you're going to have a one word/one line h1 heading then this will work fine, however for multiple words you may want to choose somethinng that animates each word instead of each individual letter. Also be sure to add a min height for the one word animation to work.  */}
              <div className={styles.headingContainer}>
                <div className={styles.headingClip}>
                  <h1 ref={headingRef} className={styles.heading}>
                    {/* We build <br /> */}
                    E-commerce {/* websites <br /> */}
                    
                    {/* <span className={styles.headingii}>the right way.</span> */}
                  </h1>
                </div>
              </div>

              {/* <p className={styles.copy}>
                We Build Fast, Secure, and Scalable Online Stores for Ambitious
                Brands.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Learn more'
                  href='/#contact'
                  btnType='primaryiii'
                  arrow
                />
              </div> */}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
