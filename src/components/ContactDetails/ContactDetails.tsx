"use client";

import styles from "./ContactDetails.module.css";
import Link from "next/link";
import Footerii from "../Footerii/Footerii";
import ContactForm from "../ContactForm/ContactForm";

const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.box}>
            <h2 className={styles.headingii}>Let&apos;s Start a Project</h2>
            <br />
            <p className={styles.copy}>
              Whether you&apos;re a prospective client or have questions about
              our services, reaching out is simple and quick. We&apos;re ready
              to assist you to ensuring a seamless and personalized experience
              as you take the next step in transforming your vacation rental
              business.
            </p>
            <br />
            <br />
            <h3 className={styles.title}>Phone</h3>
            <Link href='tel:+62363267800' className={styles.detail}>
              623-632-6780
            </Link>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Email</h2>
            <Link
              href='mailto:hello@fontsandfooters.com'
              className={styles.detail}
            >
              hello@fontsandfooters.com
            </Link>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Calendly</h2>
            <Link
              href='https://calendly.com/fontsandfooters'
              target='_blank'
              className={styles.detail}
            >
              https://calendly.com/fontsandfooters
            </Link>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Facebook</h2>
            <Link
              href='https://www.facebook.com/fontsandfooters'
              target='_blank'
              className={styles.detail}
            >
              facebook.com/fontsandfooters
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.contactFormBox}>
            <ContactForm />
          </div>
        </div>
        {/* <div className={styles.bottom}>
          <SocialsContainer />
          </div> */}
      </div>
        <Footerii />
    </div>
  );
};
export default ContactDetails;
