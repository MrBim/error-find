import React from "react";
import { Link } from "react-router-dom";
import styles from './ChooseQuiz.module.css';

const ChooseQuiz = () => {
  return (
    <div>
      <div className={styles.enabledQuiz}>
        <Link to="/quiz/activity_one">ACTIVITY ONE</Link>
      </div>
      <div className={styles.enabledQuiz}>
        <Link to="/quiz/activity_two">ACTIVITY TWO</Link>
      </div>
      <div className={styles.disabledQuiz}>
        <span>ACTIVITY THREE</span>
      </div>
      <div className={styles.disabledQuiz}>
        <span>ACTIVITY FOUR</span>
      </div>
      <div className={styles.disabledQuiz}>
        <span>ACTIVITY FIVE</span>
      </div>
    </div>
  );
};

export default ChooseQuiz;
