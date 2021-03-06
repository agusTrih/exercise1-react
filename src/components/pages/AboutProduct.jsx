import React from "react";
import "./AboutProduct.css";
import Moba1 from "../assets/images/moba.jpg";
import Moba2 from "../assets/images/moba1.jpg";
import Moba3 from "../assets/images/moba3.jpg";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AboutProduct() {
    return (
        <div>
            <section data-aos="fade-up" className="about-1" id="about">
                <h2>About Product</h2>
                <div className="about">
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src={Moba1} alt="moba" width="250px" />
                        </div>
                        <div className="star">
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <p className="text-image">Estes as Tank</p>
                    </div>
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src={Moba2} alt="moba1" width="250px" />
                        </div>
                        <div className="star">
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <p className="text-image">Alucard as Fighter</p>
                    </div>
                    <div className="about-img">
                        <div className="img-mobile">
                            <img src={Moba3} alt="moba2" width="250px" />
                        </div>
                        <div className="star">
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <p className="text-image">Grock as Tank</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutProduct;
