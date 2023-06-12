import React from 'react'
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux";
import { Component } from 'react';


class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button
                    color="success"
                    onClick={(e) => this.props.dispatch(decreaseCounter())}
                >
                    Increase by two
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);