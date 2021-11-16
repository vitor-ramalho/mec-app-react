import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
