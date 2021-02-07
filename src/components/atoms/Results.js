import { Link } from 'react-router-dom'

function Results(props) {
  const score = props.score
  return (
    <div>
      <div className="results">
        <p className="results__text">Ton score est de { score } / 10</p>
      </div>
      <Link to="/" className="results__link">Retour aux quizz</Link>
    </div>
  );
}

export default Results