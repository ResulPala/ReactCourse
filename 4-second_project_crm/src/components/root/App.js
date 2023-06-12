import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'reactstrap';

import Sidebar from '../Sidebar';
import CustomNavbar from '../CustomNavbar';
import Products from '../products/Products';
import Categories from '../categories/Categories';
import Customers from '../../pages/Customers';
import Orders from '../../pages/Orders';
import Login from '../../pages/Login';
import Home from '../../pages/Home';

function App() {
  return (
    <div>
      <Container>
        <CustomNavbar/>
        <Row>
          <Col xs='3'>
            <Sidebar />
          </Col>
          <Col xs='9'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products"  element={<Products/>}  />
            <Route path="/categories" element={<Categories/>}  />
            <Route path="/customers" element={<Customers/>}  />
            <Route path="/orders" element={<Orders/>}  />
            <Route path="/login" element={<Login/>}  />
          </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
