import LayoutWrapper from "../LayoutWrapper";
// import Offer from "../Offer/Offer";
import styles from "./HowItWorks.module.css";

const data = [
  {
    id: 1,
    feature: "Discovery & Planning",
    desc: "I begin each project by thoroughly understanding the goals, target audience, and technical requirements. This phase involves research, brainstorming, and setting a solid foundation for the project's success.",
  },
  {
    id: 2,
    feature: "Design & Prototyping",
    desc: "I create detailed wireframes and prototypes that align with the project’s objectives. Through iterative design, I ensure the final product is both functional and visually appealing.",
  },
  {
    id: 3,
    feature: "Development & Integration",
    desc: "With the design finalized, I move into development, leveraging modern technologies like Next.js and TypeScript. I focus on writing clean, efficient code and seamlessly integrating any necessary third-party services.",
  },
  {
    id: 4,
    feature: "Testing & Launch",
    desc: "Before deployment, I conduct extensive testing to guarantee optimal performance and reliability. Once the project meets all standards, I launch it and continue to monitor and optimize as needed.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.top}>
            <h2 className={styles.heading1}>
              Our Process: <br />
              <span className={styles.span}>How it works</span>
            </h2>
          </div>
          <div className={styles.box}>
            <div className={styles.middle}>
              <div className={styles.middleLeft}>
                <div className={styles.sectionTitle}></div>
              </div>
              <h4 className={styles.heading}>
                By taking a holistic approach to web development, I provide
                clients with personalized solutions, ongoing support, and
                actionable insights to ensure their success extends far beyond
                the launch.
              </h4>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.indexContainer}>
                    <span className={styles.index}>{x.id}</span>
                  </div>
                  <div>
                    <h3 className={styles.feature}>{x.feature}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Offer /> */}
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default HowItWorks;
