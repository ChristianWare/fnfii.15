import LayoutWrapper from "../LayoutWrapper";
import styles from "./Owner.module.css";
import Image from "next/image";
import Author from "../../../public/images/authorii.png";

const Owner = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              &quot;Scribes been a real game-changer for me, no more having to
              stop and take screenshots while Im working. The best part? Its all
              automatic. No more manual documentation for me - thats a huge win
              in my book.&quot;
            </h2>
            <p className={styles.author}>
                Chris Ware ~ Founder & Head Developer
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.pulsingCircles}></div>
            <div className={styles.imgContainer}>
              <Image src={Author} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Owner;
