import logo from './logo.svg';
import './App.css';
import Survey from './pages/Survey';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Route
        path='/'
        component={NavBar}
      />
      <Switch>
        {/* <Redirect exact path = '/' to = '/home'/> */}
        <Route exact path="/home" component={Survey} />
      </Switch>
    </Router>
  );
}

export default App;
