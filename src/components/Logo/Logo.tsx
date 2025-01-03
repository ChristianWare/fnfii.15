import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  color?: string;
}

const Logo = ({ color = "" }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[color]}`}>
      Fonts <span className={styles.span}>&</span> Footers
    </Link>
  );
};
export default Logo;
