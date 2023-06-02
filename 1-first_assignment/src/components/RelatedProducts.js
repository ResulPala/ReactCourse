import React from "react";

const RelatedProducts = ({ products }) => {
  return (
    <div>
      <h3>Benzer Ürünler</h3>
      {products.map((product, index) => (
        <div key={index}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Fiyat: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
