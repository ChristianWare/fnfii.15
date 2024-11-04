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
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='' title='' fill className={styles.img} />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.topHeading}>Peace of Mind</h2>
            <h3 className={styles.heading}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia.
            </h3>
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
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
