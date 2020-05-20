import React from "react";
import { TestItem } from "./testItem";
import "./cart.css";
import { cartsStore } from "../../stores/cartsStore";
import { inject, observer } from "mobx-react";
import Product from "../products/product";

@inject(cartsStore)
@observer
class Cart extends React.Component {
    render() {
        return (
            <>
                {/* <TestItem /> */}
                {this.props.cartsStore.cartProducts.map((product) => (
                    <div key={product.id}>
                        {product.price}
                        {product.name}
                        {product.id}
                        <br />
                        {product.number}
                        <br />
                        {product.category}

                        <button onClick={() => this.props.cartsStore.increaseQuantity(product.id)}>+</button>
                        <button onClick={() => this.props.cartsStore.decreaseQuantity(product.id)}>-</button>
                        <button onClick={() => this.props.cartsStore.delProduct(product.id)}>Удалить</button>
                    </div>
                ))}
            </>
        );
    }
}

export default Cart;
