// import { useParams } from "react-router-dom";
import data from "../data/quizz.json";

import Quiz from "../components/organisms/Quiz";

function QuizPage() {
  // let { id } = useParams();
  const quizData = data[0];
  return (
    <div className="container">
      <Quiz data={quizData}/>
    </div>
  );
}

export default QuizPage;
