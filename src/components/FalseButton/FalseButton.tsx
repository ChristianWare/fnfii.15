/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode } from "react";
import styles from "./FalseButton.module.css";

interface Props {
  text: ReactNode;
  btnType: string;
  onClick?: any;
  disabled?: boolean;
}

const FalseButton = ({ text, btnType, onClick, disabled = false }: Props) => {
  return (
    <button
      className={`${styles.btn} ${styles[btnType]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default FalseButton;
