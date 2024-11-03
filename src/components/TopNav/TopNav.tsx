import styles from "./TopNav.module.css";
import Link from "next/link";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";
// import Logo from "../Logo/Logo";

const TopNav = () => {
  return (
    <section className={`${styles.header} topNav`} id='home'>
      {" "}
      {/* Added class topNav */}
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          {/* <Logo /> */}
        </div>
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://www.facebook.com/'
            target='_blank'
            aria-label='Facebook'
            className={styles.detail}
          >
            <Facebook className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://instagram.com/'
            target='_blank'
            aria-label='Instagram'
            className={styles.detail}
          >
            <Insta className={styles.icon} width={12} height={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
