import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./products";
import Product from "./product";

export const Index = () => (
    <Switch>
        <Route exact={true} path="/products" component={Products} />
        {/* <Route path="/products/:id" component={Product} /> */}
    </Switch>
);
