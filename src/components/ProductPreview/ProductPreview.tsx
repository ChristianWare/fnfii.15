import styles from "./ProductPreview.module.css";
import animationData from "../../../public/lottie/hero.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ProductPreview() {
  return (
    <div className={styles.container}>
      <p className={styles.model}>
        We Build Fast, Secure, and Scalable Online Stores for Ambitious Brands.
      </p>
      <div className={styles.lottieBox}>
        <Lottie animationData={animationData} className={styles.lottie} />
      </div>
    </div>
  );
}
