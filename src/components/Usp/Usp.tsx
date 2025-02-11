"use client";

import styles from "./Usp.module.css";
import Track from "../../../public/icons/track.svg";
import Solutions from "../../../public/icons/solutions.svg";
import Attention from "../../../public/icons/attention.svg";
import Team from "../../../public/icons/team.svg";

const data = [
  {
    id: 1,
    usp: "10+",
    desc: "Years experience",
    icon: <Team className={styles.icon} width={80} height={80} />,
  },
  {
    id: 2,
    usp: "2X",
    desc: "Faster Website load times",
    icon: <Attention className={styles.icon} width={80} height={80} />,
  },
  {
    id: 3,
    usp: "14",
    desc: "Average days to launch",
    icon: <Solutions className={styles.icon} width={80} height={80} />,
  },
  {
    id: 4,
    usp: "<12",
    desc: "Portfolio of successful projects",
    icon: <Track className={styles.icon} width={80} height={80} />,
  },
];

const Usp = () => {
  return (
    <section className={styles.container}>
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
    </section>
  );
};
export default Usp;
