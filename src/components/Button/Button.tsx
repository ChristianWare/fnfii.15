/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC } from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import Arrow from "../../../public/icons/arrow2.svg";

interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  download?: boolean;
  arrow?: boolean;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  href = "",
  text,
  btnType,
  target = "",
  download,
  onClick,
  arrow,
}) => {
  return (
    <button
      className={styles.container}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        download={download}
      >
        {text}
        {arrow && <Arrow className={styles.arrow} />}
      </Link>
    </button>
  );
};
export default Button;
