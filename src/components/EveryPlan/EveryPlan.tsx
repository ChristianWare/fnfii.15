"use client";

import styles from "./EveryPlan.module.css";
import Gaii from "../../../public/icons/gaii.svg";
import Edit from "../../../public/icons/edit.svg";
import Hosting from "../../../public/icons/cloud.svg";
import Listing from "../../../public/icons/listing.svg";
import Design from "../../../public/icons/design.svg";
import Clock from "../../../public/icons/clock.svg";
import Image from "next/image";
import EveryPlanImage from "../../../public/images/everyPlan.png";
// import LayoutWrapper from "../LayoutWrapper";

const EveryPlan = () => {
  const data = [
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Hosting width={30} height={30} className={styles.icon} />,
      title: "Hosting",
      description:
        "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Edit width={30} height={30} className={styles.icon} />,
      title: "Unlimited Edits",
      description:
        "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
    },
    {
      icon: <Clock width={30} height={30} className={styles.icon} />,
      title: "24/7 Support",
      description:
        "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
    },
    {
      src: EveryPlanImage,
    },

    {
      icon: <Listing width={30} height={30} className={styles.icon} />,
      title: "Citations & Listings",
      description:
        "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
    },
    {
      icon: <Gaii width={30} height={30} className={styles.icon} />,
      title: "Traffic Analytics",
      description:
        "We will set up your plausible analytics account so that you dont have to. Focus on your business, and we will take care of the technical stuff.",
    },
    {
      icon: <Design width={30} height={30} className={styles.icon} />,
      title: "Web Design/Development",
      description:
        "We design and develop each website we build with pure code to ensure that your website is fast and ranks high on google serch results.",
    },
  ];

  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.parent}>
        {/* <div className={styles.top}>
          <h2 className={`${styles.heading}`}>What&apos;s included?</h2>
        </div> */}
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
              {x.src && (
                <div className={styles.imgContainer}>
                  <Image
                    src={EveryPlanImage}
                    alt=''
                    fill
                    className={styles.img}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default EveryPlan;
