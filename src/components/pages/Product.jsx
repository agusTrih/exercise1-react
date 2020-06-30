import React from "react";
import "./product.css";
// image
import Drawing from "../assets/images/undraw1.svg";
function Product() {
    return (
        <div>
            <section class="product" id="product">
                <h2>Product</h2>
                <div class="product-section">
                    <div class="img-pro">
                        <div class="pro-image">
                            <img src={Drawing} width="100px" />
                        </div>
                        <p class="pro-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum iste, id voluptatem nesciunt similique
                            nihil
                        </p>
                    </div>
                    <div class="img-pro">
                        <div class="pro-image">
                            <img src={Drawing} width="100px" />
                        </div>
                        <p class="pro-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum iste, id voluptatem nesciunt similique
                            nihil
                        </p>
                    </div>
                    <div class="img-pro">
                        <div class="pro-image">
                            <img src={Drawing} width="100px" />
                        </div>
                        <p class="pro-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum iste, id voluptatem nesciunt similique
                            nihil
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;
