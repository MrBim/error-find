import React from "react";
import ChooseQuiz from "../../components/ChooseQuiz/ChooseQuiz";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.main}>
      <div>CAE</div>
      <h1 className={styles.title}>Error Find</h1>
      <ChooseQuiz />
    </div>
  );
};

export default HomeScreen;
