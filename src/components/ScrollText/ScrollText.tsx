import styles from "./ScrollText.module.css";

const ScrollText = () => {
  return (
    <section className={styles.bgColor}>
      {/* <LayoutWrapper color='green3'> */}
        <div className={styles.content}>
          <div className={styles.reveal}>
            <h2 className={styles.text}>
              We offer a wide range of services to help businesses shine online.
              Our team creates designs that fit your business perfectly. Whether
              you need a simple site or a complex ecommerce platform, we can
              deliver great results. We handle every part of making a website,
              from the first idea to launch. We work with our clients to make a
              site that looks good and works well. This site will help your
              business grow.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.houseContainer}>
              <div className={styles.ampersand}>&</div>
              <div className={styles.ampersand}>&</div>
              <div className={styles.ampersand}>&</div>
            </div>
            <p className={styles.copy}>
              At Fonts & Footers, we aim to give our clients
              top-notch service for online success. Contact us today to see how
              we can boost your business with a personalized website made just
              for you.
            </p>
          </div>
        </div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default ScrollText;
