"use client";

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.container} id='contact'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <ContactDetails />
            <div className={styles.formBox}>
              <ContactForm />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactHero;
