import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h3>Sepetim</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product.name} - Adet: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
