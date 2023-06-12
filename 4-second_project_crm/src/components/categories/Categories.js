import React from 'react';
import { Row, Col } from "reactstrap";


function Products() {
  return (
    <div>
      <Row>
        <Col><h1><span class="badge bg-secondary" style={{width: "250px", height: "250px"}}>Kategori Ekle</span></h1></Col>
        <Col><h1><span class="badge bg-secondary" style={{width: "250px", height: "250px"}}>Kategori Cikar</span></h1></Col>
        <Col><h1><span class="badge bg-secondary" style={{width: "250px", height: "250px"}}>Kategori Guncelle</span></h1></Col>
      </Row>
    </div>
  );
}

export default Products;  
