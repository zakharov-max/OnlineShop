import React from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import { inject, observer } from "mobx-react";
import { productsStore } from "../../stores/productsStore";
import { SearchField } from "./searchField";

@inject(productsStore)
@observer
class Navbar extends React.Component {
    render() {
        const { filter, changeFilter, products } = this.props.productsStore;

        const clearFilter = (e) => {
            changeFilter("");
            e.currentTarget.value = "";
        };

        const searchProducts = (e) => {
            changeFilter(e.currentTarget.value);
        };

        return (
            <div className="header">
                <div className="logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGROgxGsgOoZo7aIAMUFSsKOKB-Rlsh5nMU_D656yZfi5EZaW2"
                        alt="ewfwef"
                    />
                </div>
                <SearchField
                    filter={filter}
                    clearFilter={clearFilter}
                    products={products}
                    searchProducts={searchProducts}
                />
                <ul className="navbarLinks">
                    <li>
                        <Link to="/" className="navbar-link">
                            Домой
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="navbar-link">
                            Товары
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="navbar-link">
                            Корзина
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../../css/style.css";
// import { inject, observer } from "mobx-react";
// import { productsStore } from "../../stores/productsStore";

// @inject(productsStore)
// @observer
// class Navbar extends React.Component {
//     render() {
//         const { filter, changeFilter, products } = this.props.productsStore;

//         const clearFilter = (e) => {
//             changeFilter("");
//             e.currentTarget.value = "";
//         };

//         const searchProducts = (e) => {
//             changeFilter(e.currentTarget.value);
//         };

//         return (
//             <>
//                 <div className="header">
//                     <div className="logo">
//                         <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGROgxGsgOoZo7aIAMUFSsKOKB-Rlsh5nMU_D656yZfi5EZaW2"
//                             alt="ewfwef"
//                         />
//                     </div>
//                     <div className="searchField">
//                         <input
//                             type="text"
//                             placeholder="Поиск"
//                             value={filter}
//                             onChange={searchProducts}
//                             onBlur={clearFilter}
//                         />
//                         {filter && (
//                             <div className="searchResult">
//                                 {products.map((product) => (
//                                     <div key={product.id}>
//                                         <Link to={`/products/${product.id}`}>
//                                             {product.isAvailable}
//                                             {product.price}
//                                             {product.name}
//                                             {product.id}
//                                             {product.quantity}
//                                             {product.category}
//                                         </Link>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                     <ul className="navbarLinks">
//                         <li>
//                             <Link to="/">Домой</Link>
//                         </li>
//                         <li>
//                             <Link to="/products">Товары</Link>
//                         </li>
//                         <li>
//                             <Link to="/cart">Корзина</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </>
//         );
//     }
// }

// export default Navbar;
