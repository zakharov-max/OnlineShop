import React from "react";
import "./product.css";

export const Product = (props) => {
    const { title, shortDescription, imageLink, price, buttonText, onClick, onDelete } = props;

    return (
        <div className="card">
            <h2>{title}</h2>

            <p>{shortDescription}</p>
            <div className="card-image">
                <img src={imageLink} alt={title} />
            </div>
            <div className="card-footer">
                <span>От {price}$</span>
                <a className="card-button" onClick={onClick}>
                    {buttonText}
                </a>
            </div>
        </div>
    );
};
