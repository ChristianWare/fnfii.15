"use client";

import styles from "./Problem.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import ProblemImage from "../../../public/images/problem.png";
import Outdated from "../../../public/icons/outdatedDesign.svg";
import Cloud from "../../../public/icons/cloudPresence.svg";
import Credibility from "../../../public/icons/credibility.svg";
import Update from "../../../public/icons/update.svg";
import FalseButton from "../FalseButton/FalseButton";

const Problem = () => {
  const data = [
    {
      icon: <Outdated width={70} height={70} className={styles.icon} />,
      title: "Outdated Design",
      description:
        "Your website looks outdated or unprofessional, which doesn’t reflect the quality of your business.",
    },
    {
      icon: <Cloud width={70} height={70} className={styles.icon} />,
      title: "Missed Online Presence",
      description:
        "You’re missing out on reaching potential customers because they can’t find you online.",
    },
    {
      icon: <Credibility width={90} height={90} className={styles.icon} />,
      title: "Losing Credibility",
      description:
        "Not having a website can make your business appear less credible or outdated compared to competitors who have an online presence.",
    },
    {
      icon: <Update width={70} height={70} className={styles.icon} />,
      title: "Hard to Update or Manage",
      description:
        "Every small update requires technical assistance, and it’s holding back your business growth.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.falseBtnContainer}>
            <FalseButton btnType='primary' text='Problems we solve' />
          </div>
          <h2 className={styles.heading}>
            Are you unhappy with your current ecommerce store, or do you not
            have one at all?
          </h2>
          {/* <p className={styles.leftCopy}>
            If so, then these problems probably sound familiar to you:
          </p> */}
        </div>
        <p className={styles.leftCopy}>
          This means solving strategic challenges like how to re-platform a
          technology stack, get data-driven insights from business intelligence
          or build a seamless digital experience across online and offline
          channels.{" "}
        </p>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={ProblemImage}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x: any, index) => (
              <div key={index} className={styles.card}>
                <div>
                  <h4 className={styles.title}>{x.title}</h4>
                  <p className={styles.description}>{x.description}</p>
                </div>
                {x.icon}
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
