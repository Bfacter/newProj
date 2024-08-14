import React from "react";
import "./CategoryPage.css";
function CategoryPage({ category }) {
  return (
    <div className="cateGory">
      <div>
        <h1>{category} Products</h1>
        <p>Displaying {category} related products here...</p>
      </div>
    </div>
  );
}

export default CategoryPage;
