import React, { Component } from "react";
import { storeProducts, detailProduct } from "./components/data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: [],
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartTax: 0,
    cartSubTotal: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singeItem = { ...item };
      tempProducts = [...tempProducts, singeItem];
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...tempCart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // cart
  increment = (id) => {
    console.log("increment");
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count++;
    const price = product.price;
    product.total = price * product.count;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    console.log("decrement");
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count--;
    const price = product.price;
    product.total = price * product.count;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];

    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: tempCart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    console.log(subTotal);
    let tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  // test = () => {
  //   console.log(
  //     `state value before update state: ${this.state.products[0].inCart}`
  //   );
  //   console.log(
  //     `storeProducts value before update state: ${storeProducts[0].inCart}`
  //   );
  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true;
  //   this.setState(
  //     () => {
  //       return {
  //         products: tempProducts,
  //       };
  //     },
  //     () => {
  //       console.log(
  //         `state value before update state: ${this.state.products[0].inCart}`
  //       );
  //       console.log(
  //         `storeProducts value before update state: ${storeProducts[0].inCart}`
  //       );
  //     }
  //   );
  // };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,

          openModal: this.openModal,
          closeModal: this.closeModal,

          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {/* <button
          onClick={() => {
            return this.test();
          }}
        >
          test
        </button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
