import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/details" component={Details} />
        <Route path="/carts" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;
