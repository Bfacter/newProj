import React from "react";
import "./CategoriesBar.css";
import { Link } from "react-router-dom";
function CategoriesBar({ categories }) {
  return (
    <div className="categoriesBar">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/${category.toLowerCase()}`}
          style={{ textDecoration: "none", color: "white" }}>
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoriesBar;
