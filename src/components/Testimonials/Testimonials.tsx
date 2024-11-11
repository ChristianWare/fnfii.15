import styles from "./Testimonials.module.css";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../../public/icons/person.svg";
import LayoutWrapper from "../LayoutWrapper";

const reviews = [
  {
    id: 71,
    review:
      "Taco Bell never disappoints! The Crunchwrap Supreme was packed with flavor, and the service was quick and friendly. Perfect for a late-night craving.",
    reviewer: "Carlos M.",
    company: "Phoenix, AZ",
  },
  {
    id: 72,
    review:
      "Absolutely love this Taco Bell location. The staff is always upbeat, and the food is consistently fresh. The Doritos Locos Tacos are my go-to!",
    reviewer: "Sara L.",
    company: "Tempe, AZ",
  },
  {
    id: 73,
    review:
      "Great experience every time. The food is hot, the service is fast, and the prices can't be beat. My kids are obsessed with the cheesy gordita crunch.",
    reviewer: "David P.",
    company: "Glendale, AZ",
  },
  {
    id: 74,
    review:
      "Great experience every time. The food is hot, the service is fast, and the prices can't be beat. My kids are obsessed with the cheesy gordita crunch.",
    reviewer: "David P.",
    company: "Glendale, AZ",
  },
] as const;

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.top}>
              <h2 className={styles.heading}>What our clients say</h2>
              <StarCluster color='purple' />
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
