"use client";

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactHero.module.css";
import animationData from "../../../public/lottie/email.json";
import Lottie from "lottie-react";

const ContactHero = () => {
  return (
    <section className={styles.container} id='contact'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topleft}>
              <h2 className={styles.heading}>Contact Us</h2>
              <p className={styles.copy}>
                Whether you&apos;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&apos;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.
              </p>
              <br />
              <b>
                The details shared here allow us to dive into details on our
                discovery call. Anything you share here remains confidential.
              </b>
            </div>
            <div className={styles.topRight}>
              <div className={styles.lottieBox}>
                <Lottie
                  animationData={animationData}
                  className={styles.lottie}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactHero;
