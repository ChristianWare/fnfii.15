"use client";

import styles from "./RotatingText.module.css";
import { FC } from "react";

interface RotatingTextProps {
  text: string;
  showArrow?: boolean;
  color?: string;
}

const RotatingText: FC<RotatingTextProps> = ({ text, color = "" }) => {
 

  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox='0 0 100 100'

      >
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
        <text font-size='16'>
          <textPath
            className={`${styles.svg} ${styles[color]}`}
            xlinkHref='#circle'
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default RotatingText;
