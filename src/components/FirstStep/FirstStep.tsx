import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FirstStep.module.css";

const data = [
  {
    id: 14,
    title: "",
    additioanl: [
      {
        id: 1.14,
        addTitle: "",
        addDesc: "",
      },
      {
        id: 1.24,
        addTitle: "",
        addDesc: "",
      },
      {
        id: 1.34,
        addTitle: "",
        addDesc: "",
      },
    ],
  },
  {
    id: 1,
    title: "Premium brand positioning",
    additioanl: [
      {
        id: 1.1,
        addTitle: "Marie Stella Maris",
        addDesc: "Personal care brand scaling up (VC funded)",
      },
      {
        id: 1.2,
        addTitle: "Pink Gellac ",
        addDesc: "Cosmetics brand expanding online (PE funded)",
      },
      {
        id: 1.3,
        addTitle: "Lekker Bikes ",
        addDesc: "E-Bike brand scaling across continents (PE funded)",
      },
    ],
  },
  {
    id: 2,
    title: "Value brand positioning",
    additioanl: [
      {
        id: 2.1,
        addTitle: "HEMA",
        addDesc: "Iconic home essentials brand going omnichannel (PE funded)",
      },
      {
        id: 2.2,
        addTitle: "ECOstyle",
        addDesc: "Garden care brand moving direct to consumer (PE funded)",
      },
      {
        id: 2.3,
        addTitle: "STOX",
        addDesc: "Sports appararel brand expanding online (VC funded)",
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
              We solve strategic challenges like how to re-platform your
              technology stack, expand to new sales channels or grow into
              international markets
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
            {/* <h3 className={styles.headingii}>
              Are you unhappy with your <br /> current e-commerce store?
            </h3> */}
            <div className={styles.pattern}></div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FirstStep;
