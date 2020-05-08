import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { id, img, title, price, count, total } = this.props.cart;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div>
        <div className="row my-3">
          <div className="col-10 mx-auto col-md-2 p">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase mt-3">
            <h5>
              {" "}
              <span className="d-md-none"> Product name: </span>
              {title}
            </h5>
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase mt-3">
            <h5>
              {" "}
              <span className="d-md-none"> Price: </span>$ {price}
            </h5>
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase mt-3">
            <span
              className="btn btn-outline-dark"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-outline-dark mx-2">{count}</span>
            <span
              className="btn btn-outline-dark"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase mt-3">
            <span
              className="btn btn-outline-danger"
              onClick={() => {
                removeItem(id);
              }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-10 mx-auto col-md-2 text-center text-uppercase mt-3">
            <h5>
              <span className="d-md-none"> Item total : </span>
              <strong>$ {total}</strong>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
