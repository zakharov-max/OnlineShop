import React from "react";
import {inject, observer} from "mobx-react";
import {productsStore} from "../../stores/productsStore";
import { Link } from "react-router-dom";
import {productCategories} from "../items";

@inject(productsStore)
@observer
class Footer extends React.Component {

  setCategory = (value) => () => {
    this.props.productsStore.changeProductsCategory(value)
  };
  render() {
    return <div>
      <Link to="/products" onClick={this.setCategory(productCategories.mobile)}>Мобильные телефоны</Link>
      <Link to="/products" onClick={this.setCategory(productCategories.tabletpc)}>Планшеты</Link>
      <Link to="/products" onClick={this.setCategory(productCategories.notebook)}>Ноутбуки</Link>


    </div>;
  }
}
export default Footer;
