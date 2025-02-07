"use client";

import styles from "./Projects.module.css";
import { projects } from "../../../lib/data";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Check from "../../../public/icons/checkii.svg";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className={styles.parentContent}
        >
          <div className={styles.top}>
            <div className={styles.leftSide}>
              <h2 className={styles.heading}>
                Featured
                <br />
                <span className={styles.span}>Case Study</span>{" "}
              </h2>
            </div>
          </div>
          <div className={styles.dataContainer}>
            {projects.map((x, index) => (
              <div key={index} className={styles.parent}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <h3 className={styles.titleMobile}>{x.title}</h3>
                    <div className={styles.imgContainer}>
                      <Image src={x.src} alt='' fill className={styles.img} />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.featuresContainer}>
                      <ul className={styles.list}>
                        {x.techStack.map((y, index) => (
                          <li key={index} className={styles.listItem}>
                            <span>
                              <Check className={styles.icon} />
                            </span>
                            <span className={styles.listTitleTitle}>
                              {y.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.contentBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <div className={styles.righLeftContainer}>
                    <p className={styles.description}>{x.description}</p>
                    <div className={styles.btnContainer}>
                      <Button
                        text='Live Site'
                        target='_blank'
                        href={x.href}
                        btnType='primaryii'
                        arrow
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
