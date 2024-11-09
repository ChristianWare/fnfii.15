"use client";

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactHero.module.css";
// import animationData from "../../../public/lottie/email.json";
// import Lottie from "lottie-react";
import CallToAction from "../CallToAction/CallToAction";
import Footerii from "../Footerii/Footerii";

const ContactHero = () => {
  return (
    <section className={styles.container} id='contact'>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* <div className={styles.top}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div> */}
          <CallToAction />
          <div className={styles.bottom}>
            <ContactDetails />
            <div className={styles.formBox}>
              <ContactForm />
            </div>
          </div>
        </div>
        <Footerii />
      </LayoutWrapper>
    </section>
  );
};
export default ContactHero;
