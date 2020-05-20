import { action, computed, observable } from "mobx";
import {productCategories, products} from "../components/items";

export const productsStore = "productsStore"; // ?

export class ProductsStore {
  constructor() {
    this.getProducts();
  }

  @observable storedProducts = [];

  @observable filter = "";

  @observable selectedCategory = "";

  @computed
  get productsByCategory() {
    switch (this.selectedCategory) {
      case productCategories.mobile:
        return this.storedProducts.filter(
            product => product.category === productCategories.mobile
        );
      case productCategories.tabletpc:
        return this.storedProducts.filter(
            product => product.category === productCategories.tabletpc
        );
      case productCategories.notebook:
        return this.storedProducts.filter(
            product => product.category === productCategories.notebook
        );
      default:
        return this.storedProducts;
    }
  }

  @action("changeProductsCategory")
  changeProductsCategory = value => {
    this.selectedCategory = value;
  };



  @action("clearStore")
  clearStore = () => {
    this.storedProducts = [];
  };

  @action("changeFilter")
  changeFilter = value => {
    this.filter = value;
  };

  @computed
  get products() {
    const result = !this.filter
      ? this.storedProducts
      : this.storedProducts.filter(product =>
          product.name.toLowerCase().includes(this.filter.toLowerCase())
        );
    return result;
  }

  @computed
  get availableProducts() {
    return this.storedProducts.sort(product => (product.isAvailable ? 1 : -1));
  }

  @action("getProducts")
  getProducts = () => {
    this.storedProducts = products;
  };
}
