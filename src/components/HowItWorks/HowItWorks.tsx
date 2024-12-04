"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Develop from "../../../public/icons/develop.svg";
import Consult from "../../../public/icons/consult.svg";
import Notes from "../../../public/icons/notes.svg";
import animationData from "../../../public/lottie/howitworks.json";
import dynamic from "next/dynamic";
import FalseButton from "../FalseButton/FalseButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const process = [
  {
    id: 59,
    icon: <Consult className={styles.icon} width={40} height={40} />,
    processName: "Discovery",
    processDescription:
      "We kick off with a detailed questionnaire where you tell us about your business and share your vision for the project. Inspired by your answers, we create a blueprint and discuss it in an all-hands call. This guides our next steps, ensuring no time is wasted on off-target ideas.",
  },
  {
    id: 40,
    icon: <Notes className={styles.icon} width={40} height={40} />,

    processName: "Validation",
    processDescription:
      "Based on the previous insights, we present two visual concepts so you can choose the one that best meets your needs. After your feedback, we can either refine the chosen path or proceed with it as approved.",
  },
  {
    id: 61,
    icon: <Develop className={styles.icon} width={40} height={40} />,
    processName: "Execution & handoff",
    processDescription:
      "Finally, we create a versatile visual system designed to work for the channels and formats you will use the most. The delivery—comprised of a guide and a set of essential assets—is asynchronous, so you can take your time for the final revision before the handoff.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Our 3 week Process' />
            </div>
            <div className={styles.top}>
              <h2 className={styles.heading}>
                What is the process for working with you?
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
            {process.map((x, index) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.cardLeft}>
                  <span className={styles.span}>Week {index + 1}</span>
                </div>
                <div className={styles.cardRight}>
                  <h3 className={styles.processName}>{x.processName}</h3>
                  <p className={styles.processDescription}>
                    {x.processDescription}
                  </p>
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
