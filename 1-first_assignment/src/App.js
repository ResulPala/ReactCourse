import React from "react";
import { Container, Row, Col, Navbar, Nav, NavItem } from "reactstrap";
import CategoryComponent from "./components/Category";
import ProductCardComponent from "./components/ProductCard";
import RelatedProductsComponent from "./components/RelatedProducts";
import CartComponent from "./components/Cart";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  const categories = ["Elektronik", "Giyim", "Ev & Yaşam"];

  const product = {
    name: "Asus Bilgisayar",
    description: "RTX3060 32GB Ram i7 işlemci",
    price: 40000,
  };

  const relatedProducts = [
    {
      name: "MSI Bilgisayar",
      description: "RTX3070 64GB Ram i9 işlemci",
      price: 60000,
    },
    {
      name: "Lenovo Bilgisayar",
      description: "RTX3070 64GB Ram i9 işlemci",
      price: 60000,
    },
  ];

  const cartItems = [
    { product: { name: "Bosch Buzdolabı", price: 25000 }, quantity: 2 },
    { product: { name: "Asus Klavye", price: 750 }, quantity: 1 },
  ];

  return (
    <div>
      <NavbarComponent/>
      <Container className="my-4">
        <Row>
          <Col md="3" className="bg-light">
            <CategoryComponent categories={categories} />
          </Col>
          <Col md="6">
            <ProductCardComponent product={product} />
            <RelatedProductsComponent products={relatedProducts} />
          </Col>
          <Col md="3" className="bg-light">
            <CartComponent cartItems={cartItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;


