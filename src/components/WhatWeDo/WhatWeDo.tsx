"use client";

import styles from "./WhatWeDo.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Cash from "../../../public/icons/circle-dollar-sign.svg";
import Platform from "../../../public/icons/ratio.svg";
import Design from "../../../public/icons/pen-tool.svg";
import Store from "../../../public/icons/store.svg";
import Card from "../Card/Card";

const data = [
  {
    id: 1,
    title: "Platform Consult & Selection",
    desc: "We build websites that help your online store reach new heights, combining speed, scalability, and style to make your business stand out.",
    icon: <Platform className={styles.icon} />,
  },
  {
    id: 2,
    title: "UX/UI Design & Customization",
    desc: "Simplify your workflow with seamless order processing, real-time updates, and automated confirmations to keep your customers coming back.",
    icon: <Design className={styles.icon} />,
  },
  {
    id: 4,
    title: "Payment Gateway Integrations",
    desc: "Easily manage your store from anywhere with user-friendly tools that give you control over products, sales, and analytics—all in one place.",
    icon: <Cash className={styles.icon} />,
  },
  {
    id: 3,
    title: "Store Setup & Product Management",
    desc: "Drive more sales with optimized user experiences, fast load times, and conversion-focused design that turns visitors into loyal customers.",
    icon: <Store className={styles.icon} />,
  },
];

const WhatWeDo = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading
            title='How we can be helpful'
            color='purple'
            dotColor='purple'
          />
          <h2 className={styles.heading}>
            Our <span className={styles.span}>E-commerce</span> Services
          </h2>
        </div>
        <div className={styles.bottom}>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default WhatWeDo;
