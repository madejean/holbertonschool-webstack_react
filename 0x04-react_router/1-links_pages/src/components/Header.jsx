import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Holberton from './Holberton.jsx';
import School from './School.jsx';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Holberton">Holberton</Link></li>
        <li><Link to="/School">School</Link></li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Holberton" component={Holberton}/>
        <Route path="/School" component={School}/>
      </Switch>
    </div>
  </Router>
)
export default Header;
