import React, { Component } from "react";

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="col-10 mx-auto text-title text-center mt-5">
          <h1>404 error</h1>
          <h3 className="mt-4">
            this path :{" "}
            <span style={{ color: "red" }}>{this.props.location.pathname}</span>{" "}
            is error
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
