import React, { Component } from 'react'
import { Card, Button, CardGroup, Col, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";




export default class Categories extends Component {
  state = {
    categories : [],
  }

  render() {
    return (
      <div>
        <ListGroup>

          {this.state.categories.map((category) => (

            <ListGroupItem onClick={() => console.log("dsf")}>
              
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}
