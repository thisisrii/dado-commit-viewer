import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from 'react-router-dom';
import './App.scss';
import Explorer from './views/explorer/Explorer';
import Home from './views/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/commits">
          <Explorer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
