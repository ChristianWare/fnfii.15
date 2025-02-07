import styles from "./ProductPreview.module.css";
import animationData from "../../../public/lottie/hero.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ProductPreview() {
  return (
    <div className={styles.container}>
      {/* <h3 className={styles.heading}>
        Turbo Como SL 5.0 - Smoke /
        <br /> Transparent
      </h3> */}
      <span className={styles.model}>
        {" "}
        We Build Fast, Secure, and Scalable Online Stores for Ambitious Brands.
      </span>

      <div className={styles.lottieBox}>
        <Lottie animationData={animationData} className={styles.lottie} />
      </div>
      <div className={styles.details}>
        <div className={styles.left}>
          <div className={styles.strikeThrough}>$4,250.00 USD</div>
          <div className={styles.price}>$2,349.00 USD</div>
        </div>
        <div className={styles.right}>
          <div className={styles.btn}>new</div>
          <div className={styles.btnii}>Sale</div>
        </div>
      </div>
    </div>
  );
}
