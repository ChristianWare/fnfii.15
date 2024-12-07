import Button from "../Button/Button";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Explain.module.css";

const Explain = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.falseBtnContainer}>
            <FalseButton
              btnType='primary'
              text='How Fonts & Footers can help you'
            />
          </div>
          <h2 className={styles.heading}>
            Whether you&apos;re looking to improve your current e-commerce
            store, or start a new one, Fonts & Footers can help.
          </h2>
          <div className={styles.btnContainer}>
            <Button
              text='Problems we solve'
              href='/#problems'
              btnType='secondary'
            />
            <Button text='See Our Work' href='/#projects' btnType='primaryii' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Explain;
