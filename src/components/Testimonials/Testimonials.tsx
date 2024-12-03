import styles from "./Testimonials.module.css";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../../public/icons/person.svg";
import LayoutWrapper from "../LayoutWrapper";

const reviews = [
  {
    id: 71,
    review:
      "Working with Fonts & Footers was a game-changer! Our new e-commerce store has doubled our sales, and the design perfectly reflects our brand. Highly recommend!",
    reviewer: "Emily R.",
    company: "Urban Threads, Los Angeles, CA",
  },
  {
    id: 72,
    review:
      "Fonts & Footers delivered beyond our expectations. The user-friendly interface and smooth checkout process have made a huge difference in customer satisfaction.",
    reviewer: "James P.",
    company: "Nature's Essence, Austin, TX",
  },
] as const;

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.top}>
              <StarCluster color='purple' />
              <h2 className={styles.heading}>
                Wondering what other people say?
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer1}>
          {reviews.map((x) => (
            <div key={x.id} className={styles.card}>
              <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
              <div className={styles.personBox}>
                <Person width={50} height={50} className={styles.personImage} />
                <p className={styles.reviewer}>
                  {x.reviewer}
                  <span className={styles.company}>{x.company}</span>
                  <StarCluster />
                </p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Testimonials;
