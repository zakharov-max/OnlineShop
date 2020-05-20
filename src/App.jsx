import React from "react";
import "./css/style.css";
import { Home } from "../src/components/home/home";
import { Index as ProductsRouter } from "./components/products/index";
import Cart from "../src/components/cart/cart";
import { Switch, Route } from "react-router-dom";
import Test from "./components/test";
import { Layout } from "./components/layout/layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={ProductsRouter} />
        <Route path="/cart" component={Cart} />
        <Route path="/test" component={Test} />
      </Switch>
    </Layout>
  );
};

export default App;
