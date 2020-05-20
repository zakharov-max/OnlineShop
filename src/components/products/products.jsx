import React from "react";

import "./products.css";
import { inject, observer } from "mobx-react";
import { productsStore } from "../../stores/productsStore";
import { Layout } from "../layout/layout";
import { cartsStore } from "../../stores/cartsStore";
import { Product } from "./product";
import { productCategories } from "../items";

@inject(productsStore, cartsStore)
@observer
class Products extends React.Component {
    handleSelect = (event) => {
        const value = event.target.value;
        this.props.productsStore.changeProductsCategory(value);
    };

    addItemTocart = (item) => () => {
        this.props.cartsStore.addProduct(item);
    };
    removeItemToCart = (id) => () => {
        this.props.cartsStore.delProduct(id);
    };
    render() {
        const { productsByCategory, selectedCategory } = this.props.productsStore;
        return (
            <>
                <div>
                    <select onChange={this.handleSelect} value={selectedCategory}>
                        <option value={productCategories.all}>Все</option>
                        <option value={productCategories.notebook}>Ноутбуки</option>
                        <option value={productCategories.mobile}>Телефоны</option>
                        <option value={productCategories.tabletpc}>Планшеты</option>
                    </select>
                </div>
                <div className="cards">
                    {productsByCategory.map((product) => (
                        <Product
                            key={product.id}
                            title={product.name}
                            shortDescription={product.category}
                            imageLink={product.img}
                            price={product.price}
                            buttonText={"Купить"}
                            // onClick={() => this.props.cartsStore.addProduct(product)}
                            onClick={this.addItemTocart(product)}
                            onDelete={this.removeItemToCart(product.id)}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default Products;
