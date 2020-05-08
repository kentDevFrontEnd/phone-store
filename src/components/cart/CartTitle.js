import React, { Component } from "react";

class CartTitle extends Component {
  render() {
    return (
      <div className=" d-none d-md-block mt-3">
        <div className="row">
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            products
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            name of product
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            price
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            quantity
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            remove
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase">
            total
          </div>
        </div>
      </div>
    );
  }
}

export default CartTitle;
