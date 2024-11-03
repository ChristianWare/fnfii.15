"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import Image from "next/image";
import Img from "../../../public/images/author.png";
import Arrow2 from "../../../public/icons/arrow2.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Email from "../../../public/icons/email.svg";

const Experience = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const faqs = [
    {
      question: "Industry Knowledge",
      answer:
        "We have a comprehensive understanding of the unique challenges and opportunities in web development. Our team stays updated on industry trends, best practices, and innovative solutions to deliver results that exceed your expectations.",
    },
    {
      question: "Proven Track Record",
      answer:
        "We have successfully worked with numerous business owners, helping them launch and optimize all sorts of websites. Our track record of delivering quality solutions and achieving measurable results speaks for itself.",
    },
    {
      question: "Tailored Solutions",
      answer:
        "We understand that every business is unique, and we tailor our services to fit your specific needs and goals. Whether you need a simple landing page or a multipage ecommerce site, we've got you covered.",
    },
  ];

  return (
    <section className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.authorBox}>
            <div className={styles.imgContainer}>
              <Image
                src={Img}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.socialIconContainer}>
                <LinkedIn
                  width={25}
                  height={25}
                  className={styles.socialIcon}
                />
              </div>
              <div className={styles.socialIconContainer}>
                <Email width={25} height={25} className={styles.socialIcon} />
              </div>
            </div>
            <h6 className={styles.authorDetails}>
              ~ Chris Ware, Founder & CEO ~
            </h6>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.mapContainer}>
            {faqs.map((x, index) => (
              <div
                key={index}
                className={styles.qaContainer}
                onClick={() => toggle(index)}
              >
                <div className={styles.headingArrowContainer}>
                  <div className={styles.h3Container}>
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  {selected === index ? (
                    <div className={styles.iconBox}>
                      <Arrow2
                        className={styles.iconFlip}
                        width={25}
                        height={25}
                      />
                    </div>
                  ) : (
                    <div className={styles.iconBox}>
                      <Arrow2 className={styles.icon} width={25} height={25} />
                    </div>
                  )}
                </div>
                <div
                  className={
                    selected === index
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mapContainer}>
            {faqs.map((x, index) => (
              <div
                key={index}
                className={styles.qaContainer}
                onClick={() => toggle(index)}
              >
                <div className={styles.headingArrowContainer}>
                  <div className={styles.h3Container}>
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  {selected === index ? (
                    <div className={styles.iconBox}>
                      <Arrow2
                        className={styles.iconFlip}
                        width={25}
                        height={25}
                      />
                    </div>
                  ) : (
                    <div className={styles.iconBox}>
                      <Arrow2 className={styles.icon} width={25} height={25} />
                    </div>
                  )}
                </div>
                <div
                  className={
                    selected === index
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
