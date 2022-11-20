import React from "react";
import ChooseQuiz from "../../components/ChooseQuiz/ChooseQuiz";
import styles from "./HomeScreen.module.css";
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div className={styles.main}>
      <div>CAE</div>
      <h1>Error Find</h1>
      <ChooseQuiz />
    </div>
  );
};

export default HomeScreen;
