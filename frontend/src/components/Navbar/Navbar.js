import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="mainBar">
      <div className="navBar">
        <div className="navBarTitle-Icon">
          <FontAwesomeIcon icon={faCartShopping} />
          <Link to="/">
            <img src="/image.jpeg" alt="hello" />
          </Link>
        </div>
        <div className="navBarTitle">
          <div className="Login">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                style={{ color: "white" }}
              />
              <span className="login-text">Login</span>
            </Link>
          </div>
          <div className="Cart">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon
                icon={faBasketShopping}
                style={{ color: "white" }}
              />
              <span className="cart-text">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
