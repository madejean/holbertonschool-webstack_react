import React from 'react';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';

const Curriculums = () => (
  <div>
    <ul>
      <li><Link to="/curriculums/year_1">Year 1</Link></li>
      <li><Link to="/curriculums/year_2">Year 2</Link></li>
      <li><Link to="/curriculums/year_3">Year 3</Link></li>
      <li><Link to="/curriculums/year_4">Year 4</Link></li>
    </ul>

    <Route path="/curriculums/:year_id" component={Year}/>
  </div>
)

export default Curriculums;
