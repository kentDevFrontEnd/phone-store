import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-blue">
        <div className="container">
          <Link to="/">
            <img src="./img/logo.svg" alt="logo" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link config-nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to="/carts" className="ml-auto">
            <button className="btn btn-outline-primary text-capitalize">
              <i class="fa fa-cart-plus mr-3" aria-hidden="true"></i>
              my cart
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
