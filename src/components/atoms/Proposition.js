function Proposition(props) {
  const propositionText = props.proposition.propositionText
  const correctAnswer = props.proposition.correctAnswer

  return (
    <button onClick={() => {props.answerClick(correctAnswer)}} className="answers__proposition">
      <p>{ propositionText }</p>
    </button>
  );
}

export default Proposition;
