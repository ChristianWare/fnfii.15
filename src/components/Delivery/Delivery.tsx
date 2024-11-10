import LayoutWrapper from "../LayoutWrapper";
import styles from "./Delivery.module.css";
import DoorDash from "../../../public/icons/facebook.svg";
import Ubereats from "../../../public/icons/instagram.svg";
import Grubhub from "../../../public/icons/linkedin.svg";
import Deliveroo from "../../../public/icons/email.svg";

const Delivery = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Contact us</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.iconContainer}>
              <DoorDash className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
              <Ubereats className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
              <Grubhub className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
              <Deliveroo className={styles.icon} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default Delivery;
