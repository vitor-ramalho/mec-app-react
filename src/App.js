import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import SignUpWorkshop from './components/Forms/SignUpWorkshop';
import LoginClient from './components/Forms/LoginClient';
import SignUpClient from './components/Forms/SignUpClient';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cadastro_oficina" component={SignUpWorkshop} />
          <Route path="/cadastro_cliente" component={SignUpClient} />
          <Route path="/login_cliente" component={LoginClient} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
