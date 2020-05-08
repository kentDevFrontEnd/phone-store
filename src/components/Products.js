import React, { Component } from "react";
import Product from "./product/Product";
import Title from "./title/Title";
import { ProductConsumer } from "../Context";

class Products extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => (
                  <Product key={product.id} product={product} value={value} />
                ));
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
