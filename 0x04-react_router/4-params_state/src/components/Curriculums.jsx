import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Year from './Year.jsx';

class Curriculums extends React.Component {
  render() {
  console.log(this.props.curriculums)
    return (
      <div>
        <ul>
          {this.props.curriculums.map(function(c,i) {
            return (
              <li key={i}><Link to={"/curriculums/" + c.id}>{c.name}</Link></li>
            )
          })}
        </ul>

        <Route path="/curriculums/:year_id" component={Year}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    curriculums: state.curriculums[0]
  }
}
export default connect(mapStateToProps)(Curriculums);
