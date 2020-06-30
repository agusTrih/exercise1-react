import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import About from "./AboutProduct";
import Product from "./Product";
import Findmap from "./FindMap";
import Footer from "./Footer";
function LandingPages() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <About />
            <Product />
            <Findmap />
            <Footer />
        </div>
    );
}

export default LandingPages;
