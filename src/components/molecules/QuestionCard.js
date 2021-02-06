import Proposition from "../atoms/Proposition";

function QuestionCard(props) {
  const propositions = props.data.propositions

  return (
    <div className="question">
      <p className="question__title">{ props.data.question }</p>
      <div className="answers">
        {propositions.map((proposition, i) => {
          return <Proposition key={i} proposition={proposition} answerClick={(correctAnswer) => props.answerClick(correctAnswer)}/>;
        })}
      </div>
    </div>
  );
}

export default QuestionCard;