import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { img, id, title, price, inCart } = this.props.product;
    const { handleDetail, addToCart, openModal } = this.props.value;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-3 my-3 product">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              return handleDetail(id);
            }}
          >
            <Link to="/details">
              <img src={img} alt="img product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
              disabled={inCart ? true : false}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              $ <span>{price}</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    inCart: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
