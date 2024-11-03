"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Develop from "../../../public/icons/develop.svg";
import Launch from "../../../public/icons/launch.svg";
import Consult from "../../../public/icons/consult.svg";
import Notes from "../../../public/icons/notes.svg";
import animationData from "../../../public/lottie/howitworks.json";
import Lottie from "lottie-react";

const process = [
  {
    id: 59,
    icon: <Consult className={styles.icon} />,
    processName: "Consultation",
    processDescription: "Understanding your vision and goals.",
  },
  {
    id: 50,
    icon: <Notes className={styles.icon} />,

    processName: "Planning",
    processDescription: "Strategizing and designing a custom solution.",
  },
  {
    id: 61,
    icon: <Develop className={styles.icon} />,
    processName: "Development",
    processDescription:
      "Bringing your project to life with clean, efficient code.",
  },
  {
    id: 62,
    icon: <Launch className={styles.icon} />,
    processName: "Launch",
    processDescription:
      "Deploying your website and ensuring everything runs smoothly.",
  },
  // {
  //   id: 63,
  //   icon: <Support className={styles.icon} />,
  //   processName: "Support",
  //   processDescription:
  //     "Ongoing maintenance and support to keep your site at its best.",
  // },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.top}>
              <h2 className={`${styles.heading} h2v2`}>
                How does it work?
              </h2>
              <p className={styles.topText}>
                This is our process for developing the perfect websites for your
                brand. We Keep you in the loop 100% of the time.
              </p>
            </div>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.right}>
            {process.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.box}>
                  <div className={styles.boxLeft}>{x.icon}</div>
                  <div className={styles.boxRight}>
                    <h3 className={styles.processName}>{x.processName}</h3>
                    <p className={styles.copy}>{x.processDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default HowItWorks;
