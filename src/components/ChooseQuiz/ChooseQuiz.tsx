import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const ChooseQuiz = () => {
  return (
    <div>
      <div>
        <Link to="/quiz/activity_one">Quiz 1</Link>
      </div>
      <div>
        <Link to="/quiz/activity_two">Quiz 2</Link>
      </div>
      <div>
        <span>Quiz 3</span>
      </div>
      <div>
        <span>Quiz 4</span>
      </div>
      <div>
        <span>Quiz 5</span>
      </div>
    </div>
  );
};

export default ChooseQuiz;
