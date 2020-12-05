import './App.css';
import Homepage from "./pages/Homepage";
import Survey from "./pages/Survey";
import View from "./pages/View";
import NavBar from "./components/NavBar";
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
        <Redirect exact path = '/' to = '/home'/>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/add" component={Survey} />
        <Route exact path="/view" component={View} />
      </Switch>
    </Router>
  );
}

export default App;
