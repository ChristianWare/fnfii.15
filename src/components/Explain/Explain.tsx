"use client";

import { useEffect, useRef } from "react";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Explain.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Explain = () => {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "Most web developers build sites — we build profit engines. Here’s why e-commerce requires our niche expertise";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.9,
        start: "top center",
        end: "bottom center", // Adjusted for better coverage
        markers: false, // Enable for debug
      },
    });

    // Add staggered animations to timeline
    lettersRef.current.forEach((letter, index) => {
      tl.to(
        letter,
        {
          color: "#5f46df",
          duration: 0.2,
        },
        index * 0.015
      ); // Adjust stagger value (0.015) as needed
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [lettersRef]);

  return (
    <section className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.revealText}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </h2>
          <motion.h2
            variants={fadeIn("", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true }}
            className={styles.headingii}
          >
            Most web developers build sites — we build profit engines. Here’s
            why e-commerce requires our niche expertise
          </motion.h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Explain;
