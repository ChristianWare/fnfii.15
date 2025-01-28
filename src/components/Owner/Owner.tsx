import LayoutWrapper from "../LayoutWrapper";
import styles from "./Owner.module.css";
import Image from "next/image";
import Author from "../../../public/images/authorii.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Owner = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              &quot;At Fonts & Footers, we don’t just build websites—we create
              e-commerce experiences that drive sales and build lasting
              connections. Seeing our clients thrive is what fuels our
              passion.&quot;
            </h2>
            <p className={styles.author}>
              Chris Ware － Founder & Lead Developer
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.pulsingCircles}></div>
            <motion.div
              variants={fadeIn("", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.imgContainer}
            >
              <Image src={Author} alt='' fill className={styles.img} />
            </motion.div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Owner;
