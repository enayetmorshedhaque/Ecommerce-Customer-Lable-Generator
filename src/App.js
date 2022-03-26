import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';

function App() {
  return (
    [
      <Login></Login>
    ]
  );
}

export default App;
