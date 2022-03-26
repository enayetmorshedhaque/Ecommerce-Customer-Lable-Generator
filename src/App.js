import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import EmailSent from './Components/Auth/EmailSent/EmailSent';
import NewPassword from './Components/Auth/NewPassword/NewPassword';

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
        <Route path="/forgot-password">
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path="/instruction-sent">
          <EmailSent></EmailSent>
        </Route>
        <Route path="/new-password">
          <NewPassword></NewPassword>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
