import React from "react";
import { Link } from "react-router-dom";

export const SearchField = (props) => {
    const { filter, searchProducts, clearFilter, products } = props;
    return (
        <div className="search">
            <input type="text" placeholder="Поиск" value={filter} onChange={searchProducts} onBlur={clearFilter} />
            {filter && products.length > 0 && (
                <div className="searchResult">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Link className="result" to={`/products/${product.id}`}>
                                {product.isAvailable}
                                {product.price}
                                {product.name}
                                {product.id}
                                {product.quantity}
                                {product.category}
                            </Link>
                        </div>
                    ))}
                </div>
                // ) : (
                //     <div>Товаров нет</div>
                // )
            )}
        </div>
    );
};
