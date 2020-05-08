import React, { Component } from "react";

class Title extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-10 mx-auto my-3 text-center text-title">
            <h1 className="text-capitalize">
              {name} <span className="text-blue">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
