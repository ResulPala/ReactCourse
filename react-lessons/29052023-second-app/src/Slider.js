import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";
import { Row, Col, Container } from "reactstrap";

function App() {
  const categories=["Beverages","Condiments","Confections","Dairy Products","Grains/Cereals","Meat/Poultry","Produce","Seafood"]
  const products =["Product1","product2","product3"]
  return (
    <Container>
      <Header />
      <Row> 
        <Col xs="3">
          <Categories categories={categories} />
        </Col>
        <Col xs="9">
          <Products products={products} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;