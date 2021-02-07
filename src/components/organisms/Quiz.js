import { useState } from "react";
import QuestionCard from "../molecules/QuestionCard";

function Quiz(props) {
  const data = props.data;
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  function answerClick(isCorrect) {
    if (isCorrect) setScore(score + 1);
    if (questionNumber < data.questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      console.log(score)
      setResults(true);
    }
  }

  return (
    <div>
      <h2 className="quizzName"> Quiz {data.name}</h2>
      <div className={results ? 'd-none' : '' }>
        <QuestionCard
          answerClick={answerClick}
          data={data.questions[questionNumber]}
        />
      </div>
      <div className={results ? '' : 'd-none'}>
        <h3>Composant Results en passant results en props</h3>
      </div>
    </div>
  );
}

export default Quiz;
