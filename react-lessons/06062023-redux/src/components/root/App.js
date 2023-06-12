import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Categories from '../categories/Categories';
import Cart from '../cart/Cart';


function App() {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <Categories/>
        </Col>
        <Col xs="9">
          <Cart/>
        </Col>
      </Row>

    </Container>
  );

}
export default App;
