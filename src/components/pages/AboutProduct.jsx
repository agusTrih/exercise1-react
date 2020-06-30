import React from "react";
import "./AboutProduct.css";
function AboutProduct() {
    return (
        <div>
            <section className="about-1" id="about">
                <h2>About Product</h2>
                <div className="about">
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src="/assets/img/moba.jpg" width="250px" />
                        </div>
                        <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="text-image">Estes as Tank</p>
                    </div>
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src="/assets/img/moba1.jpg" width="250px" />
                        </div>
                        <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <p className="text-image">Alucard as Fighter</p>
                    </div>
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src="/assets/img/moba3.jpg" width="250px" />
                        </div>
                        <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="text-image">Grock as Tank</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutProduct;
