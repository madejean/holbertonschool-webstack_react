import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Year1 from './curriculums/Year1.jsx';
import Year2 from './curriculums/Year2.jsx';

const Curriculums = () => (
  <div>
    <ul>
      <li><Link to="/curriculums/year_1">Year 1</Link></li>
      <li><Link to="/curriculums/year_2">Year 2</Link></li>
    </ul>

    <Route path="/curriculums/year_1" component={Year1}/>
    <Route path="/curriculums/year_2" component={Year2}/>
  </div>
)

export default Curriculums;
