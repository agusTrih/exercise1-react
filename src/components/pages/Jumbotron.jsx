import React from "react";
import "./jumbotron.css";
function Jumbotron() {
    return (
        <div>
            <section className="container" id="container">
                <h1 id="title">Play Game with Me</h1>
                <div className="text">
                    <p>Try starting from a mobile game</p>
                    <p>You can also start with games on the computer</p>
                </div>
            </section>
        </div>
    );
}

export default Jumbotron;
