import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import Generator from './pages/generator'
import Scanner from './pages/scanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <Generator/>
              </Route>
              <Route path="/qr_scanner">
                <Scanner/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
