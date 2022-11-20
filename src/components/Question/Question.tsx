import React from "react";
import styles from "./Question.module.css";

type Props = {
  questionText: string;
};

const Question = ({ questionText }: Props) => {
  return <div className={styles.questionText}>{questionText}</div>;
};

export default Question;
