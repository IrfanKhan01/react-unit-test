import './App.css';
import HomePage from './pages/Home/Home.page';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from './pages/About/AboutPage';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
