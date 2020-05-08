import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            img,
            title,
            price,
            info,
            company,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-capitalize">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h3 className="text-capitalize mb-3">
                    model: <span>{title}</span>
                  </h3>
                  <h4 className="text-muted text-title mb-3">
                    made by: <span>{company}</span>
                  </h4>
                  <h4 className="text-blue text-capitalize">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <button className="btn btn-outline-primary text-capitalize px-3 py-2 mr-2">
                        back to store
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-danger text-capitalize px-3 py-2 ml-2"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
