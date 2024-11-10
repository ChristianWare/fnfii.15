import Image from "next/image";
import styles from "./Solution.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/solution.png";
import Design from "../../../public/icons/designii.svg";

const data = [
  {
    id: 1,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "Inspiring Design",
    desc: "The design of your website inspires and you stay in the minds of your customers.",
  },
  {
    id: 2,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "Professional identity",
    desc: "You will be perceived by your visitors as trustworthy and professional.",
  },
  {
    id: 3,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "Authentic appearance",
    desc: "You can identify with your website and are happy to share the link with potential customers.",
  },
  {
    id: 4,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "Stress-free management",
    desc: "Change or expand your content effortlessly, without technical know-how.",
  },
];

const Solution = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
            <h2 className={`${styles.heading} h2v2`}>
              We build e-comm stores that truly connect with your audience
            </h2>
        <div className={styles.content}>
          <div className={styles.left}>

            <div className={styles.rightBottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  {x.icon && (
                    <div className={styles.iconContainer}>{x.icon}</div>
                  )}
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
            <p className={styles.copy}>
              You&apos;ve poured your heart into creating something special, so
              let&apos;s showcase it with thoughtful, impactful design that
              reflects the value you bring.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Solution;
