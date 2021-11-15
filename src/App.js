import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Navbar />
          <Route path="/" exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;