import styles from "./FirstStep.module.css";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1433,
    title: "",
    additioanl: [
      {
        id: 1.14,
        addTitle: "",
        addDesc: "",
      },
    ],
  },
  {
    id: 14,
    title: "Book a Discovery Call",
    additioanl: [
      {
        id: 1.14,
        addTitle: "Understand Your Needs",
        addDesc:
          "We’ll discuss your business goals, target audience, and vision for your online store.",
      },
      {
        id: 1.24,
        addTitle: "Identify Challenges",
        addDesc:
          "Together, we’ll pinpoint obstacles holding your business back from reaching its full potential.",
      },
      {
        id: 1.34,
        addTitle: "Create a Roadmap",
        addDesc:
          "We’ll outline the next steps for building a custom online store tailored to your business.",
      },
    ],
  },
  {
    id: 1,
    title: "Develop a Customized Plan",
    additioanl: [
      {
        id: 1.1,
        addTitle: "Strategic Design",
        addDesc:
          "Our team will craft a plan to design an e-commerce store that reflects your brand’s identity.",
      },
      {
        id: 1.2,
        addTitle: "Technical Framework",
        addDesc:
          "We’ll determine the best technologies and features to meet your needs and scale with your business.",
      },
      {
        id: 1.3,
        addTitle: "Timeline and Deliverables",
        addDesc:
          "We’ll provide a clear timeline and list of deliverables so you know exactly what to expect.",
      },
    ],
  },
];

const FirstStep = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Our clients' />
            </div>
            <h2 className={styles.heading}>
              Take the first step toward your dream online store. Let’s build a
              high-converting website that elevates your business
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomMap}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <h3 className={styles.title}>{x.title}</h3>
                  {x.additioanl.map((y) => (
                    <div className={styles.list} key={y.id}>
                      <h4 className={styles.addTitle}>{y.addTitle}</h4>
                      <p className={styles.addDesc}>{y.addDesc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.problemContainer}>
            <div className={styles.pattern}></div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FirstStep;
