import React from "react";
import "./product.css";
// image
import Drawing from "../assets/images/undraw1.svg";
function Product() {
    return (
        <div>
            <section className="product" id="product">
                <h2 data-aos="fade-up">Product</h2>
                <div className="product-section">
                    <div data-aos="fade-up" className="img-pro">
                        <div className="pro-image">
                            <img src={Drawing} alt="draw" width="100px" />
                        </div>
                        <p className="pro-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum iste, id voluptatem nesciunt similique
                            nihil
                        </p>
                    </div>
                    <div data-aos="fade-up" className="img-pro">
                        <div className="pro-image">
                            <img src={Drawing} alt="draw" width="100px" />
                        </div>
                        <p className="pro-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum iste, id voluptatem nesciunt similique
                            nihil
                        </p>
                    </div>
                    <div data-aos="fade-up" className="img-pro">
                        <div className="pro-image">
                            <img src={Drawing} alt="draw" width="100px" />
                        </div>
                        <p className="pro-text">
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
