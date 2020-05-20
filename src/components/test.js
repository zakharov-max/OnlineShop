import React from "react";
import { inject, observer } from "mobx-react";
import { productsStore } from "../stores/productsStore";

@inject(productsStore)
@observer
class Test extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  // constructor(props) {
  //   super(props);
  // }

  handleInput = event => {
    const value = event.target.value;
    this.props.productsStore.changeFilter(value);
  };

  render() {
    const {
      filter,
      changeFilter,
      availableProducts
    } = this.props.productsStore;
    return (
      // <div>
      //   {filter}
      //   <input onChange={this.handleInput} />
      //   <input onChange={e => changeFilter(e.target.value)} />
      // </div>
      <div>
        {this.props.productsStore.availableProducts.map(product => (
          <div key={product.id}>
            <div style={product.isAvailable ? { color: "red" } : {}}>
              {product.name}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Test;
