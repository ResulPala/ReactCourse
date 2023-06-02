import React from "react";

const Category = ({ categories }) => {
  return (
    <div>
      <h2>Kategoriler</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
