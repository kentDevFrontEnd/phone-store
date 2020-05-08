import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { img, title, price } = value.modalProduct;
          const { modalOpen } = value;

          console.log(modalOpen);
          if (!value.modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-product">
                <div className="container ">
                  <div className="row">
                    <div
                      className="col-8 mx-auto pt-5 col-md-6 col-lg-4 bg-light
                  text-center "
                    >
                      <h5 className="text-blue text-capitalize">
                        item added to cart
                      </h5>
                      <img
                        src={img}
                        alt="modal product"
                        className="img-fluid"
                      />
                      <h4>{title}</h4>
                      <h5 className="text-muted">
                        Price: $ <span>{price}</span>
                      </h5>
                      <Link to="/">
                        <button
                          className="btn btn-outline-primary text-capitalize mr-2 mb-3"
                          onClick={() => {
                            value.closeModal();
                          }}
                        >
                          back to store
                        </button>
                      </Link>
                      <Link to="/carts">
                        <button
                          className="btn btn-outline-danger text-capitalize ml-2 mb-3"
                          onClick={() => {
                            value.closeModal();
                          }}
                        >
                          cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
