import React, { Component } from 'react'
import { Card, Button, CardGroup, Col, CardImg, CardBody, CardTitle } from "reactstrap";

export default class cart extends Component {
    state = {
        list: [],
        
      };
    
    render() {
        return (
            <div>
                <h2>CARTS</h2>
                <CardGroup>
                    {this.state.list.map((newPara) => (
                        <Col xs="3">
                            <Card
                                style={{ marginLeft: "10px", marginRight: "10px" }}
                                key={newPara.id}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src={newPara.image}
                                />
                                <CardBody>
                                    <CardTitle>{newPara.name}</CardTitle>
                                </CardBody>
                                <Button>
                                    Add
                                </Button>

                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>

        )
    }
}
