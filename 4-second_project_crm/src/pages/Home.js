import React from 'react';
import HomeProductCard from '../components/home/HomeProductCard'
import HomeCategoryCard from '../components/home/HomeCategoryCard'
import HomeCustomerCard from '../components/home/HomeCustomerCard'
import HomeOrderCard from '../components/home/HomeOrderCard'
import { Col, Row} from 'reactstrap';

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <HomeProductCard/>
        </Col>
        <Col>
          <HomeCategoryCard/>
        </Col>
      </Row>
      <Row mt-3>
        <Col>
          <HomeCustomerCard/>
        </Col>
        <Col>
          <HomeOrderCard/>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
