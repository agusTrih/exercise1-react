import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import About from "./AboutProduct";
import Product from "./Product";
function LandingPages() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <About />
            <Product />
        </div>
    );
}

export default LandingPages;
