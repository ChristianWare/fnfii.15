"use client";

import ContactDetails from "../ContactDetails/ContactDetails";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.container} id='contact'>
      <LayoutWrapper>
            <ContactDetails />
      </LayoutWrapper>
    </section>
  );
};
export default ContactHero;
