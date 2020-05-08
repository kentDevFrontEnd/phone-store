import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import CartList from "./cart/CartList";
import CartTitle from "./cart/CartTitle";
import Empty from "./cart/Empty";
import Title from "./title/Title";
import CartTotals from "./cart/CartTotals";

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartTitle />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <Empty />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
