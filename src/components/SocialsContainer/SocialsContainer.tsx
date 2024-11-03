import Link from "next/link";
import styles from "./SocialsContainer.module.css";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";

const SocialsContainer = () => {
  return (
    <div className={styles.content}>
      <Link
        href='https://www.linkedin.com/'
        target='_blank'
        className={styles.detail}
      >
        <LinkedIn className={styles.icon} width={12} height={12} />
      </Link>
      <Link
        href='https://www.facebook.com/fontsandfooters'
        target='_blank'
        className={styles.detail}
      >
        <Facebook className={styles.icon} width={12} height={12} />
      </Link>
      <Link
        href='https://instagram.com/'
        target='_blank'
        className={styles.detail}
      >
        <Insta className={styles.icon} width={12} height={12} />
      </Link>
    </div>
  );
};
export default SocialsContainer;
