import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Kibandaski, at your door step</h2>
      <p>
        Choose your favorite kibandaski dish from our broad selection of street
        delicies and enjoy at home.
      </p>
      <p>
        All our meals are street authentic, just-in-time and of course by
        experienced vendors!
      </p>
    </section>
  );
};

export default MealsSummary;
