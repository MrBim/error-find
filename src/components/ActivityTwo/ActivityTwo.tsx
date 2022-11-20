import React, { useState } from "react";
import ActivityTwoResults from "../ActivityTwoResults/ActivityTwoResults";
import Question from "../Question/Question";
import styles from "./ActivityTwo.module.css";

type Props = {
  quiz: apiActivityTwo | null;
};

const ActivityTwo = ({ quiz }: Props) => {
  const [quizState, setQuizState] = useState<{
    question: number;
    round: number;
    answers: string[][];
  }>({ question: 0, round: 0, answers: [] });
  const getResult = (choice: boolean) => {
    return quiz?.questions[quizState.round].questions[quizState.question]
      .is_correct === choice
      ? "correct"
      : "incorrect";
  };
  const handleChoice = (choice: boolean) => {
    const result = getResult(choice);
    const newRound =
      quizState.question + 1 ===
      quiz?.questions[quizState.question].questions.length;
    const answers = [...quizState.answers];
    if (!answers[quizState.round]) answers.push([]);
    answers[quizState.round] = [...answers[quizState.round], result];
    setQuizState({
      question: newRound ? 0 : quizState.question + 1,
      round: newRound ? quizState.round + 1 : quizState.round,
      answers,
    });
  };

  return (
    <div>
      {quiz && quizState.round < quiz.questions.length ? (
        <div>
          <h1 className={styles.title}>Activity Two</h1>
          <h2 className={styles.questionNum}>
            {quiz.questions[quizState.round].round_title}
          </h2>
          <Question
            questionText={
              quiz
                ? quiz.questions[quizState.round].questions[quizState.question]
                    .stimulus
                : ""
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
      {quiz && quizState.round === quiz.questions.length ? (
        <ActivityTwoResults results={quizState.answers} />
      ) : null}
    </div>
  );
};

export default ActivityTwo;
