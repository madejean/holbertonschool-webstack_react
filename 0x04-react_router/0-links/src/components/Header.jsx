import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Holberton">Holberton</Link></li>
        <li><Link to="/School">School</Link></li>
      </ul>
    </div>
  </Router>
)
export default Header;
