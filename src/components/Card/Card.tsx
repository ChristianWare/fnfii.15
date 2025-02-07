"use client";
import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Card.module.css";

interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Card = ({ title, desc, icon }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [35, -35]);
  const rotateY = useTransform(x, [0, 1], [-35, 35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const flipCard = () => setIsFlipped((prev) => !prev);

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={flipCard}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flip : ""}`}>
        <div className={styles.front}>
          <h3 className={styles.title}>{title}</h3>
          {icon}
        </div>

        <div className={styles.back}>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
