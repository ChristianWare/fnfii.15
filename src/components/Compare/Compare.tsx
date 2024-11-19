import styles from "./Compare.module.css";
import Button from "../Button/Button";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import Listing from "../../../public/icons/listing.svg";
import Clock from "../../../public/icons/clock.svg";
import Check from "../../../public/icons/checkii.svg";
import Close from "../../../public/icons/closeii.svg";

const data = [
  {
    id: 1,
    icon: <Listing className={styles.iconiii} />,
    title: "Steel fence from other companies",
    details: [
      {
        id: 1.1,
        details: "Corrosion resistance",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 1.2,
        details: "No maintenance required",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 1.3,
        details: "Aesthetics without welds",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 1.4,
        details: "Exceptional durability",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 1.5,
        details: "Innovative design",
        icon: <Close className={styles.iconii} />,
      },
    ],
  },
  {
    id: 2,
    icon: <Clock className={styles.icon} />,
    title: "Steel fence from other companies",
    details: [
      {
        id: 2.1,
        details: "Corrosion resistance",
        icon: <Check className={styles.iconii} />,
      },
      {
        id: 2.2,
        details: "No maintenance required",
        icon: <Check className={styles.iconii} />,
      },
      {
        id: 2.3,
        details: "Aesthetics without welds",
        icon: <Check className={styles.iconii} />,
      },
      {
        id: 2.4,
        details: "Exceptional durability",
        icon: <Check className={styles.iconii} />,
      },
      {
        id: 2.5,
        details: "Innovative design",
        icon: <Check className={styles.iconii} />,
      },
    ],
  },
];

const Compare = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Us vs. the other guys' />
            </div>
            <h2 className={styles.heading}>An investment for years to come</h2>
            <p className={styles.copy}>
              FENZ® fences are modern solutions that offer exceptional
              durability, aesthetics and practicality. Below is a comparison of
              our aluminum fences with traditional steel fences.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule Discovery Call'
                href='/#schedule'
                btnType='secondary'
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <div className={styles.column} key={x.id}>
                <div className={styles.iconContainer}>
                  {x.icon}
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <div className={styles.dataBox}>
                  {x.details.map((y) => (
                    <ul key={y.id} className={styles.box}>
                      {y.icon}

                      <li>{y.details}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Compare;
