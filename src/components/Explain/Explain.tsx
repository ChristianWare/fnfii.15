import { fadeIn } from "../../../animation/variants";
import LayoutWrapper from "../LayoutWrapper";
import WhatWeDo2 from "../WhatWeDo2/WhatWeDo2";
import styles from "./Explain.module.css";
import { motion } from "framer-motion";

const Explain = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Most web developers build sites — we build{" "}
            <motion.span
              variants={fadeIn("", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.headingii}
            >
              profit engines.
            </motion.span>{" "}
          </h2>
         
          <div className={styles.bottom}>
            <WhatWeDo2 />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Explain;
