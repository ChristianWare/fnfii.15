"use client";

import styles from "./Solution.module.css";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/chuxlyHome.png";
import Img2 from "../../../public/images/chuxlyCart.png";
import Img3 from "../../../public/images/ChuxlyAbout.png";
import Img4 from "../../../public/images/chuxlyFaq.png";
import Img5 from "../../../public/images/chuxlyShop.png";
import Img6 from "../../../public/images/chuxlyFooter.png";
import Design from "../../../public/icons/designii.svg";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Button from "../Button/Button";
import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const data = [
  {
    id: 1,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "A. Home Page",
    desc: "Engage your audience with visually stunning designs that reflect your brand and captivate customers.",
    src: Img1,
  },
  {
    id: 2,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "B. Cart Modal",
    desc: "Leverage insights to optimize your store for better user experiences and higher conversions.",
    src: Img2,
  },
  {
    id: 3,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "C. About Page",
    desc: "Guide visitors effortlessly from discovery to checkout with a streamlined shopping experience.",
    src: Img3,
  },
  {
    id: 4,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "D. FAQ's",
    desc: "Stay ahead with fast, secure, and scalable solutions tailored to your e-commerce needs.",
    src: Img4,
  },
  {
    id: 5,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "E. Shop Page",
    desc: "Create a memorable connection with your audience by showcasing what makes your brand unique.",
    src: Img5,
  },
  {
    id: 6,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "F. Footer",
    desc: "Drive results with strategies designed to turn casual visitors into loyal customers.",
    src: Img6,
  },
];

export default function Solution() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.rightBottom}>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    activeIndex === index
                      ? `${styles.card} ${styles.active}`
                      : styles.card
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.h3
                    variants={fadeIn("left", 0.3)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    className={styles.title}
                  >
                    {item.title}
                  </motion.h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <SectionHeading
                title='Projects'
                color='purple'
                dotColor='purple'
              />

              <h2 className={styles.heading}>
                {/* We build online stores that{" "}
                <motion.span
                  variants={fadeIn("down", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                  className={styles.span}
                >
                  resonate
                </motion.span>{" "}
                with your audience */}
                Featured
                <br />
                <span className={styles.span}>Case Study</span>{" "}
              </h2>
              <p className={styles.copy}>
                You&apos;ve worked hard to create something unique—let&apos;s
                showcase it with impactful design that highlights the value you
                offer.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Live Site'
                  target='_blank'
                  href={"/"}
                  btnType='primaryii'
                  arrow
                />
                <Button
                  text='More Details'
                  href={"/"}
                  btnType='primaryii'
                  arrow
                />
              </div>
            </div>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.imgContainer}
              >
                <Image
                  src={data[activeIndex].src}
                  alt=''
                  fill
                  className={styles.img}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
