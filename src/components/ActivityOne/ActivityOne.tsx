import React, { useState } from "react";
import ActivityOneResults from "../ActivityOneResults/ActivityOneResults";
import Question from "../Question/Question";
import styles from "./ActivityOne.module.css";

type Props = {
  quiz: apiActivityOne | null;
};

const ActivityOne = ({ quiz }: Props) => {
  const [quizState, setQuizState] = useState<{
    question: number;
    answers: string[];
  }>({ question: 0, answers: [] });

  const handleChoice = (choice: boolean) => {
    const result =
      quiz?.questions[quizState.question].is_correct === choice
        ? "correct"
        : "incorrect";
    setQuizState({
      question: quizState.question + 1,
      answers: [...quizState.answers, result],
    });
  };

  return (
    <div>
      {quiz && quizState.question < quiz.questions.length ? (
        <div>
          <h1 className={styles.title}>Activity One</h1>
          <h2 className={styles.questionNum}>
            {`Q${quizState.question + 1}`}.
          </h2>
          <Question
            questionText={
              quiz ? quiz.questions[quizState.question].stimulus : ""
            }
          />
          <button
            className={styles.answerButton}
            onClick={() => handleChoice(true)}
          >
            CORRECT
          </button>
          <button
            className={styles.answerButton}
            onClick={() => handleChoice(false)}
          >
            INCORRECT
          </button>
        </div>
      ) : null}
      {quiz && quizState.question === quiz.questions.length ? (
        <ActivityOneResults results={quizState.answers} />
      ) : null}
    </div>
  );
};

export default ActivityOne;
