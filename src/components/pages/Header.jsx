import React from "react";
// css
import "./header.css";
// image

import Undraw from "../assets/images/undraw (5).svg";
function Header() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <ul>
                        <li className="nav">
                            <a href="/">Menu</a>
                        </li>
                        <li className="nav">
                            <a href="/">About</a>
                        </li>
                        <li className="logo-header">
                            <img
                                className="logo-img"
                                alt="image"
                                src={Undraw}
                                width="60px"
                            />
                        </li>
                        <li className="nav">
                            <a href="/">Product</a>
                        </li>
                        <li className="nav">
                            <a href="/">Find</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
