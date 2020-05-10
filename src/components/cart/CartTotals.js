import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton";
class CartTotals extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = this.props.value;
    const { history } = this.props;
    console.log(clearCart);
    return (
      <React.Fragment>
        <div className="container mb-3">
          <div className="row">
            <div className="col-10 ml-sm-5 ml-md-auto text-right col-md-8">
              <Link to="/">
                <button
                  className="btn btn-danger px-3 text-capitalize"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  clear cart
                </button>
              </Link>
              <h5 className="mt-3">
                <span className="text-title text-capitalize">
                  sub total: ${" "}
                </span>
                {cartSubTotal}
              </h5>
              <h5 className="mt-3">
                <span className="text-title text-capitalize">tax: $ </span>
                {cartTax}
              </h5>
              <h5 className="mt-3">
                <span className="text-title text-capitalize">total: $ </span>
                {cartTotal}
              </h5>
              <PaypalButton
                total={cartTotal}
                clearCart={clearCart}
                history={history}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartTotals;
