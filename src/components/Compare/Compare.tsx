import styles from "./Compare.module.css";
import Button from "../Button/Button";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import Listing from "../../../public/icons/sad.svg";
import Clock from "../../../public/icons/happy.svg";
import Check from "../../../public/icons/checkii.svg";
import Close from "../../../public/icons/closeii.svg";

const data = [
  {
    id: 1,
    icon: <Listing className={styles.iconiii} />,
    title: "Other E-comm stores",
    iconii: <Clock className={styles.icon} />,
    titleii: "Our E-comm stores",
    details: [
      {
        id: 1.1,
        details: "Boring templates",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 2.1,
        details: "Custom design",
        icon: <Check className={styles.iconPurple} />,
      },
      {
        id: 1.2,
        details: "Performance issues",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 2.2,
        details: "Performance optimization",
        icon: <Check className={styles.iconPurple} />,
      },
      {
        id: 1.3,
        details: "Limited scalability",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 2.3,
        details: "High scalability",
        icon: <Check className={styles.iconPurple} />,
      },
      {
        id: 1.4,
        details: "Poor SEO practices",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 2.4,
        details: "SEO-friendly development",
        icon: <Check className={styles.iconPurple} />,
      },
      {
        id: 1.5,
        details: "Generic support",
        icon: <Close className={styles.iconii} />,
      },
      {
        id: 2.5,
        details: "Dedicated support",
        icon: <Check className={styles.iconPurple} />,
      },
    ],
  },
  // {
  //   id: 2,
  //   icon: <Clock className={styles.icon} />,
  //   title: "Our E-comm stores",
  //   details: [
  //     {
  //       id: 2.1,
  //       details: "Custom design",
  //       icon: <Check className={styles.iconii} />,
  //     },
  //     {
  //       id: 2.2,
  //       details: "Performance optimization",
  //       icon: <Check className={styles.iconii} />,
  //     },
  //     {
  //       id: 2.3,
  //       details: "High scalability",
  //       icon: <Check className={styles.iconii} />,
  //     },
  //     {
  //       id: 2.4,
  //       details: "SEO-friendly development",
  //       icon: <Check className={styles.iconii} />,
  //     },
  //     {
  //       id: 2.5,
  //       details: "Dedicated support",
  //       icon: <Check className={styles.iconii} />,
  //     },
  //   ],
  // },
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
            <h2 className={styles.heading}>
              Why <span className={styles.span}>choose us</span> over the
              competition?
            </h2>
            <p className={styles.copy}>
              When it comes to building your e-commerce store, not all solutions
              are created equal. We go beyond templates and generic designs to
              deliver custom-built websites tailored to your unique goals.
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
                <div className={styles.iconContainerBox}>
                  <div className={styles.iconContainer}>
                    <h3 className={styles.title}>{x.title}</h3>
                    {x.icon}
                  </div>
                  <div className={styles.iconContainer}>
                    <h3 className={styles.title}>{x.titleii}</h3>
                    {x.iconii}
                  </div>
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
