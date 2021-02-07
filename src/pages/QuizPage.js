import data from "../data/quizz.json";
import Quiz from "../components/organisms/Quiz";
import { useParams } from "react-router-dom";

function QuizPage(props) {
  const { id } = useParams()
  const quizData = data[id - 1];

  return (
    <div className="container">
      <Quiz data={quizData}/>
    </div>
  );
}

export default QuizPage;
