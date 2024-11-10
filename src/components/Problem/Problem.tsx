/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./Problem.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import ProblemImage from "../../../public/images/problem.png";
import Outdated from "../../../public/icons/outdatedDesign.svg";
import Cloud from "../../../public/icons/cloudPresence.svg";
import Update from "../../../public/icons/update.svg";
import FalseButton from "../FalseButton/FalseButton";

const Problem = () => {
  const data = [
    {
      icon: <Outdated width={50} height={50} className={styles.icon} />,
      title: "Outdated Design",
      description:
        "Your website looks outdated or unprofessional, which doesn’t reflect the quality of your business.",
    },
    {
      icon: <Cloud width={50} height={50} className={styles.icon} />,
      title: "Missed Online Presence",
      description:
        "You’re missing out on reaching potential customers because they can’t find you online.",
    },
    // {
    //   icon: <Credibility width={70} height={70} className={styles.icon} />,
    //   title: "Losing Credibility",
    //   description:
    //     "Not having a website can make your business appear less credible or outdated compared to competitors who have an online presence.",
    // },
    {
      icon: <Update width={50} height={50} className={styles.icon} />,
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
            Are you unhappy with your current ecommerce store?
          </h2>
         
        </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            {data.map((x: any, index) => (
              <div key={index} className={styles.card}>
                {x.icon}
                <div>
                  <h4 className={styles.title}>{x.title}</h4>
                  <p className={styles.description}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
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
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
