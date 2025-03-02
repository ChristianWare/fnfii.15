import styles from "./PremiumHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";
import Image from "next/image";
import Mega from "../../../public/images/mega.png";
import Usp from "../Usp/Usp";
import SectionHeading from "../SectionHeading/SectionHeading";

const PremiumHero = () => {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <SectionHeading
                title='Members Only'
                color='purple'
                dotColor='purpleDot'
              />
            </div>
            <h1 className={styles.heading}>Premium Page</h1>
            <p className={styles.copy}>
              We build custom online stores designed to elevate your brand,
              engage your audience, and drive conversions.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Mega} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
        <Usp />
      </LayoutWrapper>
    </section>
  );
};

export default PremiumHero;
