"use client";

import { projects } from "../../../lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import animationData from "../../../public/lottie/usp.json";
import dynamic from "next/dynamic";
import Check from "../../../public/icons/checkii.svg";
import FalseButton from "../FalseButton/FalseButton";
import Button from "../Button/Button";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.parentContent}>
          <div className={styles.leftSide}>
            <FalseButton btnType='primary' text='Our Projects' />
            <h2 className={styles.heading}>
              Our work <br /> speaks for itself
            </h2>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.dataContainer}>
            {projects.slice(0, 1).map((x, index) => (
              <div key={index} className={styles.parent}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <h3 className={styles.titleMobile}>{x.title}</h3>
                    <h3 className={styles.title}>{x.title}</h3>
                    <div className={styles.imgContainer}>
                      <Image src={x.src} alt='' fill className={styles.img} />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.righLeftContainer}>
                      <h4 className={styles.description}>{x.description}</h4>
                      <div className={styles.btnContainer}>
                        <Button
                          text='Live Site'
                          target='_blank'
                          href={x.href}
                          btnType='primaryii'
                        />
                      </div>
                    </div>

                    <div className={styles.featuresContainer}>
                      <p>Features: </p>
                      <br />
                      <ul className={styles.list}>
                        {x.techStack.map((y, index) => (
                          <li key={index} className={styles.listItem}>
                            <span>
                              <Check className={styles.icon} />
                            </span>
                            {y.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <h3 className={styles.title}>{x.title}</h3> */}
                  </div>
                </div>
                {/* {activeProjectIndex === index && (
                  <Modal
                    isOpen={activeProjectIndex === index}
                    onClose={handleCloseModal}
                  >
                    <p className={styles.modalDescription}>{x.description}</p>
                    <div className={styles.modalLinks}>
                      <Link
                        href={x.href}
                        target='_blank'
                        className={styles.link}
                      >
                        Live Site <span className={styles.arrow}>→</span>
                      </Link>
                      <div className={styles.link} onClick={handleCloseModal}>
                        Close
                      </div>
                    </div>
                  </Modal>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
