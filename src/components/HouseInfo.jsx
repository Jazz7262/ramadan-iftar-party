import React from "react";

function HouseInfo() {
    return (
        <section id="house-info">
            <h1 className="title-quote">هَٰذَا مِن فَضْلِ رَبِّي</h1>

            <div className="wrapper">
                <div
                    className="content"
                    data-aos="zoom-in"
                    data-aos-offset="300"
                >
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="3"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="4"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="house-img"
                                        src="../assets/images/house-1.jpeg"
                                        alt="house_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="house-img"
                                        src="../assets/images/house-2.png"
                                        alt="house_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="house-img"
                                        src="../assets/images/house-3.jpeg"
                                        alt="house_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="house-img"
                                        src="../assets/images/house-4.jpeg"
                                        alt="house_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="house-img"
                                        src="../assets/images/house-5.jpeg"
                                        alt="house_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="info">
                        <h3>Our Residence</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HouseInfo;
