"use client";

import styles from "./RotatingText.module.css";
import { FC } from "react";
import animationData from "../../../public/lottie/hero.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface RotatingTextProps {
  text: string;
  showArrow?: boolean;
  color?: string;
}

const RotatingText: FC<RotatingTextProps> = ({ text, color = "" }) => {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <svg className={styles.svg} viewBox='0 0 100 100'>
        <defs>
          <path
            id='circle'
            d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text fontSize='10.5'>
          <textPath className={styles.svg} xlinkHref='#circle'>
            {text}
          </textPath>
        </text>
      </svg>
      <div className={styles.lottieBox}>
        <Lottie animationData={animationData} className={styles.lottie} />
      </div>
    </div>
  );
};
export default RotatingText;
