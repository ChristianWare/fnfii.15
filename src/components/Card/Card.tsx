/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Card.module.css";
import FalseButton from "../FalseButton/FalseButton";

interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Card = ({ title, desc, icon }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [35, -35]);
  const rotateY = useTransform(x, [0, 1], [-35, 35]);

  useEffect(() => {
    const checkTouchDevice = () => {
      try {
        const mediaQuery = window.matchMedia(
          "(hover: hover) and (pointer: fine)"
        );
        setIsTouchDevice(!mediaQuery.matches);
      } catch (e) {
        setIsTouchDevice(
          "ontouchstart" in window || navigator.maxTouchPoints > 0
        );
      }
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    x.set(0.5);
    y.set(0.5);
  };

  const flipCard = () => setIsFlipped((prev) => !prev);

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={!isTouchDevice ? { rotateX, rotateY } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={flipCard}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flip : ""}`}>
        <div className={styles.front}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.btnContainer}>
            <FalseButton text='more details →' btnType='primary' />
          </div>
        </div>

        <div className={styles.back}>
          {icon}
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
