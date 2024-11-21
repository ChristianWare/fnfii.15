import Image from "next/image";
import styles from "./Solution.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/solution.png";
import Design from "../../../public/icons/designii.svg";
import FalseButton from "../FalseButton/FalseButton";

const data = [
  {
    id: 1,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "A. Customer-Centric Design",
    desc: "Engage your audience with visually stunning designs that reflect your brand and captivate customers.",
  },
  {
    id: 2,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "B. Data-Driven Decisions",
    desc: "Leverage insights to optimize your store for better user experiences and higher conversions.",
  },
  {
    id: 3,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "C. Seamless User Journey",
    desc: "Guide visitors effortlessly from discovery to checkout with a streamlined shopping experience.",
  },
  {
    id: 4,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "D. Cutting-Edge Technology",
    desc: "Stay ahead with fast, secure, and scalable solutions tailored to your e-commerce needs.",
  },
  {
    id: 5,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "E. Brand Storytelling",
    desc: "Create a memorable connection with your audience by showcasing what makes your brand unique.",
  },
  {
    id: 6,
    icon: <Design width={30} height={30} className={styles.icon} />,
    title: "F. Conversion-Focused Execution",
    desc: "Drive results with strategies designed to turn casual visitors into loyal customers.",
  },
];

const Solution = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {/* <div className={styles.top}>
          
        </div> */}
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.rightBottom}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='How we can help' />
            </div>
            <h2 className={`${styles.heading} h2v2`}>
              We build e-comm stores that truly resonate with your audience
            </h2>
            <p className={styles.copy}>
              You&apos;ve worked hard to create something unique—let&apos;s
              showcase it with impactful design that highlights the value you
              offer.
            </p>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Solution;
