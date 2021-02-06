import { Link } from "react-router-dom";
import "../assets/scss/pages/_homepage.scss";

function HomePage() {
  return (
    <div className="choice">
      <h2 className="choice__title">Choisir un ReaQuizz</h2>
      <div className="choice__quizzContainer">
        <Link to="/quizz/1" className="choice__quizz" data-name="Joji">
          <h3 className="choice__quizzTitle">Quizz Joji</h3>
        </Link>
        <Link to="/quizz/2" className="choice__quizz" data-name="Foot">
          <h3 className="choice__quizzTitle">Quizz Foot</h3>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
