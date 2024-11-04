"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommFeatures.module.css";
import Payment from "../../../public/icons/payment.svg";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Integration from "../../../public/icons/integration.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Analytics from "../../../public/icons/analytics.svg";
import FalseButton from "../FalseButton/FalseButton";

const EcommFeatures = () => {
  const ecommerceFeatures = [
    {
      icon: <Integration width={75} height={75} className={styles.icon} />,
      title: "Platform Integration",
      description:
        "We integrate with leading e-commerce platforms like Shopify, WooCommerce, and Magento, ensuring your online store has the functionality and flexibility required to succeed in a competitive market.",
      whyImportant: [
        {
          title: "Platform Expertise",
        },
        {
          title: "Custom Solutions",
        },
        {
          title: "Third-Party Integrations",
        },
        {
          title: "Automated Email Notifications",
        },
      ],
    },
    {
      icon: <Design width={75} height={75} className={styles.icon} />,
      title: "Custom Website Design",
      description:
        "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience. Our designs are crafted to captivate your audience and provide an engaging user experience.",
      whyImportant: [
        {
          title: "Unique Design",
        },
        {
          title: "User-Centered Approach",
        },
        {
          title: "Responsive Layouts",
        },
        {
          title: "Fast Loading Speeds",
        },
      ],
    },

    {
      icon: <SEO width={75} height={75} className={styles.icon} />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results, driving organic traffic to your site.",
      whyImportant: [
        {
          title: "On-Page SEO",
        },
        {
          title: "Keyword Research",
        },
        {
          title: "Performance Monitoring",
        },
        {
          title: "Link Building",
        },
      ],
    },
    {
      icon: <Analytics width={75} height={75} className={styles.icon} />,
      title: "E-commerce Analytics and Reporting",
      description:
        "We provide comprehensive analytics and reporting to help you understand your e-commerce performance and make data-driven decisions.",
      whyImportant: [
        {
          title: "Performance Metrics",
        },
        {
          title: "Custom Reports",
        },
        {
          title: "Actionable Insights",
        },
        {
          title: "Ongoing Optimization",
        },
      ],
    },
    {
      icon: <Multiple width={75} height={75} className={styles.icon} />,
      title: "Multiple Products Management",
      description:
        "Our e-commerce platforms enable efficient management of multiple products, allowing you to easily add, update, and organize your product catalog.",
      whyImportant: [
        {
          title: "Easy Product Addition",
        },
        {
          title: "Bulk Updates",
        },
        {
          title: "Inventory Tracking",
        },
        {
          title: "Category Management",
        },
      ],
    },
    {
      icon: <Payment width={75} height={75} className={styles.icon} />,
      title: "Stripe Payment Gateway",
      description:
        "Integrating Stripe as your payment gateway for  ensures secure transactions, supports multiple payment methods, automates payments, and expands global reach.",
      whyImportant: [
        {
          title: "Secure Transactions",
        },
        {
          title: "Multiple Payment Methods",
        },
        {
          title: "Global Reach",
        },
        {
          title: "Real-Time Reporting",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton btnType='primary' text="What's included" />
          <h2 className={`${styles.heading} h2v2`}>
            Features of our Ecommerce Websites
          </h2>
        </div>
        <div className={styles.dataContainer}>
          {ecommerceFeatures.map((x, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.left}>
                <div className={styles.iconContainer}>{x.icon}</div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
                {/* <p className={styles.desc}>{x.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommFeatures;
