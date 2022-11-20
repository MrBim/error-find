import React, { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getQuestions } from "../../scripts/network-functions";
import { data } from "../../data/data";
import ActivityOne from "../../components/ActivityOne/ActivityOne";
import ActivityTwo from "../../components/ActivityTwo/ActivityTwo";

const Quiz = () => {
  const { quizType } = useParams();
  // const { data, error } = useQuery("questions", getQuestions);
  const [currentQuiz, setCurrentQuiz] = useState<
    apiActivityOne | apiActivityTwo | null
  >(null);
  const [quizMetaData, setQuizMetadata] = useState({
    quizName: "",
    heading: "",
  });
  const [quizState, setQuizState] = useState({ round: 0, question: 0 });
  const formatQuizType = (quizType: string) => {
    return quizType.split("_").join(" ");
  };
  useEffect(() => {
    if (!data) return;
    const { name, heading, activities }: apiQuizResponse = data;
    const thisQuiz = activities.filter(
      (it) =>
        it.activity_name.toLowerCase() ===
        formatQuizType(quizType ? quizType : "")
    )[0];

    setCurrentQuiz(thisQuiz);
    setQuizMetadata({ quizName: name, heading });
  }, [data, quizType]);
  return (
    <div>
      {/* <h1>{currentQuiz?.activity_name}</h1> */}
      {currentQuiz && currentQuiz.activity_name === "Activity One" ? (
        <ActivityOne quiz={currentQuiz} />
      ) : null}
      {currentQuiz && currentQuiz.activity_name === "Activity Two" ? (
        <ActivityTwo quiz={currentQuiz} />
      ) : null}
    </div>
  );
};

export default Quiz;
