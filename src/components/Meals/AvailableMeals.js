import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chapo dondo",
    description: "Beans with chapati",
    price: 80,
  },
  {
    id: "m2",
    name: "Ugali Matumbo",
    description: "Baked corn with cow stomach",
    price: 150,
  },
  {
    id: "m3",
    name: "Smokie",
    description: "smokie  rolled with chapati",
    price: 60,
  },
  {
    id: "m4",
    name: "Rolex",
    description: "Smocha in steroids",
    price: 80,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
