import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
