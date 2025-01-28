"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommFeatures.module.css";
import Payment from "../../../public/icons/payment.svg";
import SEO from "../../../public/icons/seo.svg";
import Designii from "../../../public/icons/designii.svg";
import Integration from "../../../public/icons/integration.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Analytics from "../../../public/icons/analytics.svg";
import Edit from "../../../public/icons/edit.svg";
import Hosting from "../../../public/icons/cloud.svg";
import Listing from "../../../public/icons/listing.svg";
import Clock from "../../../public/icons/clock.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import dynamic from "next/dynamic";
import animationData from "../../../public/lottie/usp.json";

type EcommerceFeature = {
  icon?: JSX.Element | string;
  title?: string;
  description?: string;
  whyImportant?: { title: string }[];
};

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const EcommFeatures = () => {
  const ecommerceFeatures: EcommerceFeature[] = [
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
      icon: <Integration width={40} height={40} className={styles.icon} />,
      title: "Platform Integration",
      description:
        "We integrate with leading e-commerce platforms like Shopify, WooCommerce, and Magento, ensuring your online store has the functionality and flexibility required to succeed in a competitive market.",
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
      icon: <Designii width={40} height={40} className={styles.icon} />,
      title: "Custom Website Design",
      description:
        "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience.",
    },
    {
      icon: <SEO width={40} height={40} className={styles.icon} />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Analytics width={40} height={40} className={styles.icon} />,
      title: "E-commerce Analytics",
      description:
        "We provide comprehensive analytics and reporting to help you understand your e-commerce performance.",
    },
    {
      icon: <Multiple width={40} height={40} className={styles.icon} />,
      title: "Inventory Management",
      description:
        "Our e-commerce platforms enable efficient management of multiple products.",
    },

    {
      icon: <Payment width={40} height={40} className={styles.icon} />,
      title: "Stripe Payment Gateway",
      description:
        "Integrating Stripe as your payment gateway ensures secure transactions and supports multiple payment methods.",
    },

    {
      icon: <Hosting width={40} height={40} className={styles.icon} />,
      title: "Hosting",
      description:
        "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
    },

    {
      icon: <Edit width={40} height={40} className={styles.icon} />,
      title: "Unlimited Edits",
      description:
        "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
    },
    {
      icon: <Clock width={40} height={40} className={styles.icon} />,
      title: "24/7 Support",
      description:
        "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
    },
    {
      icon: <Listing width={40} height={40} className={styles.icon} />,
      title: "Citations & Listings",
      description:
        "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
    },
  ];

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true }}
          className={styles.parent}
        >
          <div className={styles.top}>
            <h2 className={styles.heading}>
              <span className={styles.span}>Features</span> of our <br />{" "}
              Ecommerce Websites
            </h2>
            <p className={styles.copy}>
              Packed with powerful tools and intuitive design, our e-commerce
              websites are built to enhance user experience, drive sales, and
              scale effortlessly with your business.
            </p>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
          <div className={styles.dataContainer}>
            {ecommerceFeatures.map((x, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.left}>
                  <motion.div
                    variants={
                      index % 2 === 0
                        ? fadeIn("right", 0.3)
                        : fadeIn("left", 0.3)
                    }
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className={styles.iconContainer}
                  >
                    {x.icon}
                  </motion.div>
                </div>
                <div className={styles.right}>
                  <motion.h3
                    variants={
                      index % 2 === 0
                        ? fadeIn("right", 0.3)
                        : fadeIn("left", 0.3)
                    }
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className={styles.title}
                  >
                    {x.title}
                  </motion.h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};

export default EcommFeatures;
