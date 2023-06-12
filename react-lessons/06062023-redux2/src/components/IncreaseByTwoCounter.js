import React from 'react'
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux";
import { Component } from 'react';


class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={(e) => this.props.dispatch(increaseByTwoCounter())}
        >
          Increase by two
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);