import { fadeIn } from "../../../animation/variants";
import LayoutWrapper from "../LayoutWrapper";
import ProductPreview from "../ProductPreview/ProductPreview";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./PageIntro.module.css";
import { motion } from "framer-motion";

export default function PageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className={styles.parent}
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <SectionHeading
                title='E-commerce Web Developer'
                color='white'
                dotColor='whiteDot'
              />

              <h1 className={styles.heading}>
                We build <br />
                e-commerce <br /> websites <br />
                <span className={styles.headingii}>the right way.</span>
              </h1>

              {/* <p className={styles.copy}>
                  We Build Fast, Secure, and Scalable Online Stores for
                  Ambitious Brands.
                </p> */}
            </div>
            <div className={styles.right}>
              <ProductPreview />
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
