import LayoutWrapper from "../LayoutWrapper";
import styles from "./PostHero.module.css";
import Payment from "../../../public/icons/payment.svg";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Img1 from "../../../public/images/posthero.png";
import Image from "next/image";

const data = [
  {
    icon: <Payment width={75} height={75} className={styles.icon} />,

    feature: "Trust & Transparency",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
  {
    icon: <SEO width={75} height={75} className={styles.icon} />,

    feature: "User-Friendly",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
  {
    icon: <Design width={75} height={75} className={styles.icon} />,

    feature: "Growth",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
  {
    icon: <Multiple width={75} height={75} className={styles.icon} />,

    feature: "Personalization",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
];

const PostHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h2 className={styles.topHeading}>Peace of Mind</h2>
            </div>
            <div className={styles.topRight}>
              <h3 className={styles.heading}>
                Empowering vacation rental owners with personalized and
                user-friendly direct booking websites, our mission is to
                liberate hosts from intermediary platforms, fostering
                independence, trust, and growth in their businesses, as we
                redefine the vacation rental experience away from Airbnb. Here
                are the four ways we plan on accomplishing that goal:
              </h3>
            </div>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.box}>
                {/* <div className={styles.iconContainer}>{x.icon}</div> */}
                <span className={styles.index}>Step {index + 1}</span>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='' title='' fill className={styles.img} />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
