import React from "react";
import "./findmap.css";
function FindMap() {
    return (
        <div>
            <section className="find-map" id="findmap">
                <div className="maping" style={{ width: "100%" }}>
                    <h3 style={{ color: "black" }}>Find Us</h3>
                    <iframe
                        width="50%"
                        height="300"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Main%20kuy)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    >
                        <a href="https://www.maps.ie/draw-radius-circle-map/">
                            Radius map tool
                        </a>
                    </iframe>
                </div>
                <br />
            </section>
        </div>
    );
}

export default FindMap;
