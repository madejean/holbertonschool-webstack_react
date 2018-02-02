import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Holberton from './Holberton.jsx';
import School from './School.jsx';
import Curriculums from './Curriculums.jsx';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/holberton">Holberton</Link></li>
        <li><Link to="/school">School</Link></li>
        <li><Link to="/curriculums">Curriculums</Link></li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/holberton" component={Holberton}/>
        <Route path="/school" component={School}/>
        <Route path="/curriculums" component={Curriculums}/>
      </Switch>
    </div>
  </Router>
)
export default Header;
