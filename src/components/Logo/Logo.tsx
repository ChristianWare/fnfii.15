import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  color?: string;
}

const Logo = ({ color = "" }: Props) => {
  return (
    <Link href='#home' className={`${styles.logo} ${styles[color]}`}>
      Fonts & Footers
    </Link>
  );
};
export default Logo;
