import React, { Component } from "react";

class Empty extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-capitalize text-title pt-5">
            <h1>your current cart is empty</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Empty;
