"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import RotatingText from "../RotatingText/RotatingText";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    const heroText = new SplitType(headingRef.current, { types: "chars" });

    gsap.set(headingRef.current, { visibility: "visible" });

    gsap.set(heroText.chars, {
      y: 150,
      opacity: 0,
    });

    gsap.to(heroText.chars, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.05,
    });
  });

  useGSAP(
    () => {
      if (!copyRef.current) return;

      // Hide immediately before splitting
      gsap.set(copyRef.current, { visibility: "hidden" });

      const text = new SplitType(copyRef.current, {
        types: "lines",
        tagName: "div",
        lineClass: styles.line,
      });

      // Reveal parent while keeping lines hidden
      gsap.set(copyRef.current, { visibility: "visible" });

      // Set initial state for lines
      gsap.set(text.lines, {
        y: "100%",
        opacity: 0,
        willChange: "transform, opacity",
      });

      // Animate lines with proper stagger
      gsap.to(text.lines, {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => text.revert();
    },
    { scope: copyRef }
  );

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
                    E-commerce 
                    {/* websites <br /> */}
                    {/* <span className={styles.headingii}>the right way.</span> */}
                  </h1>
                </div>
              </div>

              <p className={styles.copy} ref={copyRef}>
                We Build Fast, Secure, and Scalable Online Stores for Ambitious
                Brands.
              </p>
              {/* <div className={styles.btnContainer}>
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
