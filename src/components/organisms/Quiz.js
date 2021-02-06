import { useState } from "react";
import QuestionCard from "../molecules/QuestionCard";

function Quiz(props) {
  const data = props.data;
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  function answerClick(isCorrect) {
    console.log(isCorrect);
    isCorrect ? setScore(score + 1) : console.log("mauvaise réponse");
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <div>
      <div>
        Ceci est la page du Quiz {data.name}
        <QuestionCard
          answerClick={answerClick}
          data={data.questions[questionNumber]}
        />
      </div>
    </div>
  );
}

export default Quiz;
