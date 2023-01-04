
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Readings from './Readings';
import Header from './Header';

function App() {
  return (
    <main>
    <div className="App">
      <Header>
      </Header>
      <Switch>
        <Route path="/">
        <Home/>
        </Route>

        <Route path="/Readings">
        <Readings/>
        </Route>
        
      </Switch>
    </div>
    </main>
  );
}

export default App; 
