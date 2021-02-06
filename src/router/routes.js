import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuizPage from "../pages/QuizPage";
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <Router>
      <h1>
        <Link to="/">ReaQuizz</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          {HomePage}
        </Route>
        <Route path="/quizz/:id">{QuizPage}</Route>
        <Route path="/*">{NotFoundPage}</Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
