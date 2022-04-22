import React from "react";

function Slide() {
    return (
        <section id="slide">
            <div className="container-fluid">
                <div className="slide-content">
                    <div
                        className="slide-content-bg "
                        data-aos="zoom-in"
                        data-aos-offset="300"
                    >
                        <div className="title">
                            <h5>
                                WE ARE ARRANGING <span className="break"></span>
                                IFTAR PARTY
                            </h5>
                            <h2>Save Our Date</h2>
                            <p id="guest-ref" className="date">
                                23<sup>rd</sup> April, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slide;
