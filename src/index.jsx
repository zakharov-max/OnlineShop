import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Router } from "react-router";
import { Provider } from "mobx-react";
import { ProductsStore } from "./stores/productsStore";
import { CartsStore } from "./stores/cartsStore";
import history from "./history";
import * as serviceWorker from "./serviceWorker";

const productsStore = new ProductsStore();
const cartsStore = new CartsStore();

render(
    <Provider productsStore={productsStore} cartsStore={cartsStore}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.register();
