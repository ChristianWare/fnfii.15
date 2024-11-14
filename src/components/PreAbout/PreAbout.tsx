import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PreAbout.module.css";

const data = [
  {
    id: 1,
    desc: "UX / UI",
    btnType: "secondary",
  },
  {
    id: 2,
    desc: "UX / UI",
    btnType: "tertiary",
  },
  {
    id: 3,
    desc: "UX / UI",
    btnType: "fourth",
  },
  {
    id: 4,
    desc: "UX / UI",
    btnType: "fifth",
  },
  {
    id: 5,
    desc: "UX / UI",
    btnType: "sixth",
  },
  {
    id: 6,
    desc: "UX / UI",
    btnType: "third",
  },
  {
    id: 7,
    desc: "UX / UI",
    btnType: "secondary",
  },
  {
    id: 8,
    desc: "UX / UI",
    btnType: "tertiary",
  },
  {
    id: 9,
    desc: "Motion",
    btnType: "fourth",
  },
  {
    id: 10,
    desc: "Design",
    btnType: "fifth",
  },
  {
    id: 11,
    desc: "Web",
    btnType: "sixth",
  },
  {
    id: 12,
    desc: "AI",
    btnType: "third",
  },
  {
    id: 13,
    desc: "Branding",
    btnType: "sixth",
  },
  {
    id: 14,
    desc: "Animations",
    btnType: "secondary",
  },
  {
    id: 15,
    desc: "SEO",
    btnType: "tertiary",
  },
  {
    id: 16,
    desc: "Typography",
    btnType: "fourth",
  },
  {
    id: 17,
    desc: "Video",
    btnType: "fifth",
  },
  {
    id: 18,
    desc: "Conversion",
    btnType: "sixth",
  },
  {
    id: 19,
    desc: "Page Speed",
    btnType: "third",
  },
];

const PreAbout = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              At NextGenAgency, we are a collective of digital artisans
              committed to transforming your visions into compelling online
              experiences. With a blend of innovation, creativity, and
              technology, we craft websites that not only look stunning but
              perform exceptionally. Our passion for digital excellence drives
              us to push the boundaries of design and functionality, ensuring
              your brand stands out in the digital crowd. We believe in building
              partnerships, not just websites, by understanding your unique
              needs and aspirations. Join us on a journey to digital brilliance.
            </h2>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <div className={styles.btnContainer} key={x.id}>
                <FalseButton text={x.desc} 
                // btnType={x.btnType}
                btnType='secondary'
                
                />
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PreAbout;
