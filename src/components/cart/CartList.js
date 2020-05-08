import React, { Component } from "react";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    const { cart } = this.props.value;
    return (
      <div>
        {cart.map((item) => {
          return (
            <CartItem key={item.id} cart={item} value={this.props.value} />
          );
        })}
      </div>
    );
  }
}

export default CartList;
