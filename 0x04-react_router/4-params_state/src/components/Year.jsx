import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Year extends React.Component {
  render() {
    let curriculum_id = this.props.match.params.year_id;
    let curriculum = this.props.curriculums.filter(function(c) {
      return c.id === curriculum_id;
    })[0]
    return (
      <div>
        <h2>{curriculum.name}</h2>
        <h3>{curriculum.description}</h3>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    curriculums: state.curriculums[0]
  }
}

export default withRouter(connect(mapStateToProps)(Year));
