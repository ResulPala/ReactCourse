import React from 'react'
import { connect } from "react-redux";

function Counter() {
  return (
    <div>
        <h2>Count {this.props.counter}</h2>

    </div>
  );
}

function mapStateToProps(state) {
    return {counter: state.counterReducer};
}

export default connect(mapStateToProps)(Counter);