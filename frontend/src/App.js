import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import CategoriesBar from "./components/CategoriesBar/CategoriesBar";
import CategoryPage from "./components/CategoryPage/CategoryPage";

const categories = [
  "Books",
  "Electronics",
  "Clothing",
  "Toys",
  "Sports",
  "Home & Kitchen",
  "Beauty & Health",
  "Automotive",
  "Other",
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <CategoriesBar categories={categories} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} default />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />

        {categories.map((category, index) => (
          <Route
            key={index}
            path={`/${category.toLowerCase()}`}
            element={<CategoryPage category={category} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
