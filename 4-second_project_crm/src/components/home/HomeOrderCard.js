import React from 'react'
import { CardBody,Card,CardTitle,ListGroup,ListGroupItem } from 'reactstrap';


function HomeOrderCard() {
  return (
    <div>
        <Card
            style={{
              width: '18rem'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                Siparisler
              </CardTitle>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                An item
              </ListGroupItem>
            </ListGroup>
          </Card>
    </div>
  )
}

export default HomeOrderCard