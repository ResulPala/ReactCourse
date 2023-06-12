import React from 'react'
import { CardBody,Card,CardTitle,ListGroup,ListGroupItem } from 'reactstrap';


function HomeProductCard() {
  return (
    <div>
      
          <Card
            style={{
              width: '18rem'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                Ürünler
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

export default HomeProductCard