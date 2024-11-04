"use client";

import { projects } from "../../../lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal/Modal";
// import animationData from "../../../public/lottie/projects.json";
// import Lottie from "lottie-react";

// interface Project {
//   src: StaticImageData;
//   title: string;
//   description: string;
//   href: string;
//   github?: string;
//   techStack?: { title: string }[];
// }

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null
  );

  const handleOpenModal = (index: number) => {
    setActiveProjectIndex(index);
  };

  const handleCloseModal = () => {
    setActiveProjectIndex(null);
  };
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        {/* <div className={styles.lottieBox} id='projects'>
          <Lottie animationData={animationData} className={styles.lottie} />
        </div> */}
        <h2 className={`${styles.heading} h2v2`}>Case Studies</h2>
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
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  <span className={styles.span}>Links:</span>
                  <div className={styles.links}>
                    <Link href={x.href} target='_blank' className={styles.link}>
                      Live Site <span className={styles.arrow}>→</span>
                    </Link>
                    <div
                      className={styles.link}
                      onClick={() => handleOpenModal(index)}
                    >
                      More details
                    </div>
                  </div>
                </div>
              </div>
              {activeProjectIndex === index && (
                <Modal
                  isOpen={activeProjectIndex === index}
                  onClose={handleCloseModal}
                >
                  <p className={styles.modalDescription}>{x.description}</p>
                  <div className={styles.modalLinks}>
                    <Link href={x.href} target='_blank' className={styles.link}>
                      Live Site <span className={styles.arrow}>→</span>
                    </Link>
                    <div className={styles.link} onClick={handleCloseModal}>
                      Close
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
