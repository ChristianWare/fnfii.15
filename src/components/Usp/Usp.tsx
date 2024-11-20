"use client";

import styles from "./Usp.module.css";
// import Track from "../../../public/icons/track.svg";
import Solutions from "../../../public/icons/solutions.svg";
import Attention from "../../../public/icons/attention.svg";
import Team from "../../../public/icons/team.svg";


const data = [
  {
    id: 1,
    usp: "7+",
    desc: "Skilled professionals with a passion",
    icon: <Team className={styles.icon} width={80} height={80} />,
  },
  {
    id: 2,
    usp: "4*",
    desc: "Building strong relationships",
    icon: <Attention className={styles.icon} width={80} height={80} />,
  },
  {
    id: 3,
    usp: "40%",
    desc: "Combining the latest technology",
    icon: <Solutions className={styles.icon} width={80} height={80} />,
  },
  // {
  //   id: 4,
  //   usp: "<12",
  //   desc: "Portfolio of successful projects",
  //   icon: <Track className={styles.icon} width={80} height={80} />,
  // },
];

const Usp = () => {
  return (
    // <section className={styles.container}>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div>
                  <h3 className={styles.usp}>{x.usp}</h3>
                </div>
                <p className={styles.copy}>{x.desc}</p>
              </div>
            ))}
          </div>
    // </section>
  );
};
export default Usp;
