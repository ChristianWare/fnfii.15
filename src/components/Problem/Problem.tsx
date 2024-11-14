/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./Problem.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import Image from "next/image";
// import ProblemImage from "../../../public/images/problem.png";
import Outdated from "../../../public/icons/outdatedDesign.svg";
import Cloud from "../../../public/icons/cloudPresence.svg";
import Update from "../../../public/icons/update.svg";
import Credibility from "../../../public/icons/credibility.svg";
import FalseButton from "../FalseButton/FalseButton";

const Problem = () => {
  const data = [
    {
      icon: <Outdated width={50} height={50} className={styles.icon} />,
      title: "Modernise my tech stack to grow faster",
      description:
        "Your website looks outdated or unprofessional, which doesn’t reflect the quality of your business.",
    },
    {
      icon: <Cloud width={50} height={50} className={styles.icon} />,
      title: "Simplify my tech stack to get to profitability",
      description:
        "You’re missing out on reaching potential customers because they can’t find you online.",
    },
    {
      icon: <Credibility width={70} height={70} className={styles.icon} />,
      title: "Create a seamless digital experience to sell more",
      description:
        "Not having a website can make your business appear less credible or outdated compared to competitors who have an online presence.",
    },
    {
      icon: <Update width={50} height={50} className={styles.icon} />,
      title: "Improve business intelligence to get better insights",
      description:
        "Every small update requires technical assistance, and it’s holding back your business growth.",
    },
    {
      icon: <Outdated width={50} height={50} className={styles.icon} />,
      title: "Modernise my tech stack to grow faster",
      description:
        "Your website looks outdated or unprofessional, which doesn’t reflect the quality of your business.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Problems we solve</h2>
          <div className={styles.falseBtnContainer}>
            <FalseButton btnType='primary' text='Main problem' />
          </div>
          <div className={styles.problemContainer}>
            <h3 className={styles.headingii}>
              Are you unhappy with your <br /> current e-commerce store?
            </h3>
            <div className={styles.pattern}></div>
          </div>
        </div>
        <div className={styles.falseBtnContainerii}>
          <FalseButton btnType='primary' text='Sub-problems' />
        </div>
        <div className={styles.bottom}>
          {/* <div999 className={styles.right}> */}
          {data.map((x: any, index) => (
            <div key={index} className={styles.card}>
              <h4 className={styles.title}>{x.title}</h4>
              {/* {x.icon} */}
              <p className={styles.description}>{x.description}</p>
            </div>
          ))}
          {/* </div999> */}
          {/* <div className={styles.left}> */}
          {/* <div className={styles.imgContainer}>
              <Image
                src={ProblemImage}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div> */}
          {/* </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
