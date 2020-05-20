import React from "react";
import "./testItem.css";

export const TestItem = () => {
    return (
        <div className="main">
            <div className="img-cart">
                <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-silver-select-2019?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1566953858420"
                    alt="sss"
                />
            </div>
            <div className="info-container">
                <div className="info section-border">
                    <div>
                        <p1>
                            <b>iPhone 11 Pro Max 512GB Silver</b>
                        </p1>
                    </div>
                    <div>
                        <b>1</b>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <b>$1,449.00</b>
                        <a href="#">Remove</a>
                    </div>
                </div>
                <div className="info-2 section-border">
                    <div className="support-section">
                        <p2>
                            <b>Add AppleCare+ for MacBook Air for $249.00</b>
                        </p2>
                        <div>Get up to three years of technical support and accidental damage coverage.</div>
                        <a href="#">Learn more ></a>
                    </div>

                    <div className="add">
                        <a href="#">Add</a>
                    </div>
                </div>
                <div className="info-3 section-border">
                    <p2>
                        <b>Add a gift message or gift wrap</b>
                    </p2>
                </div>
                <div className="info-4 ">
                    <p2>
                        <b>
                            Find out how soon you can get this item.<a href="#"> Enter zip code</a>
                        </b>
                    </p2>
                    <div className="delivery">
                        <div>Ships in 1–2 business days.</div>
                        <div className="del">
                            <div>
                                <b>Pickup:</b>
                            </div>
                            <div> Pick up at an Apple Store near you.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
