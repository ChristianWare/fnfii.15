import styles from "./PostHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Payment from "../../../public/icons/payment.svg";
import Clock from "../../../public/icons/clock.svg";
import Handshake from "../../../public/icons/support.svg";
import Img1 from "../../../public/images/posthero.png";
import Image from "next/image";

const data = [
  {
    icon: <Payment width={75} height={75} className={styles.icon} />,
    feature: "Transparent Pricing",
    desc: "No hidden fees or surprises—just straightforward pricing so you know exactly what you’re paying for.",
  },
  {
    icon: <Clock width={75} height={75} className={styles.icon} />,
    feature: "On-Time Delivery",
    desc: "We guarantee timely delivery of your e-commerce store, so you can launch and start selling without delays.",
  },
  {
    icon: <Handshake width={75} height={75} className={styles.icon} />,
    feature: "Ongoing Support",
    desc: "From launch to growth, we’re here for you every step of the way, ensuring peace of mind with continuous support.",
  },
];

const PostHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='' title='' fill className={styles.img} />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.topHeading}>
              Work with us for{" "}
              <span className={styles.span}>peace of mind</span>
            </h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.iconContainer}>{x.icon}</div>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
