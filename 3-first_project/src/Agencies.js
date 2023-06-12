import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Agencies extends Component {
  state = {
    agencies: ["Cumhuriyet", "HaberTürk", "KARAR", "Sabah", "Hürriyet"]
  };


  render() {

    return (
      <ListGroup>
        
          {this.state.agencies.map((agency) => (

            <ListGroupItem   onClick={() => this.props.changeAgency(agency)}>
              {agency}
            </ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

