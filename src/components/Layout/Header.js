import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Kibandaski</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="kibandaski imeomoka" />
      </div>
    </React.Fragment>
  );
};

export default Header;
