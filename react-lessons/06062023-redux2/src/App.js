import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';

function App() {
  

  
    return (
      <Container>
        <Row>
          <Counter/>
          <IncreaseCounter/>
          <DecreaseCounter/>
          <IncreaseByTwoCounter/>
        </Row>
        
      </Container>
    );
  
}
export default App;
