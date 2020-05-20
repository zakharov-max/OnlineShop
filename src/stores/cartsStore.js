import { action, computed, observable } from "mobx";

export const cartsStore = "cartsStore";

export class CartsStore {
    @observable cartProducts = [];

    @action("addProduct")
    addProduct = (product) => {
        if (this.cartProducts.find((p) => p.id === product.id)) {
            this.cartProducts = this.cartProducts.map((p) =>
                p.id === product.id ? { ...p, number: (p.number += 1) } : p
            );
        } else {
            const newProduct = {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                number: 1,
            };
            this.cartProducts.push(newProduct);
        }
    };

    @action("delProduct")
    delProduct = (id) => {
        this.cartProducts = this.cartProducts.filter((product) => product.id !== id);
    };

    @action("increaseQuantity")
    increaseQuantity = (id) => {
        this.cartProducts = this.cartProducts.map((p) => (p.id === id ? { ...p, number: (p.number += 1) } : p));
    };

    @action("decreaseQuantity")
    decreaseQuantity = (id) => {
        const product = this.cartProducts.find((p) => p.id === id);
        if (product && product.number > 1) {
            this.cartProducts = this.cartProducts.map((p) => (p.id === id ? { ...p, number: (p.number -= 1) } : p));
        } else {
            this.delProduct(id);
        }
    };
}
