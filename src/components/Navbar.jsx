import React from "react";

function Navbar() {
    function handleClick() {
        var btn = document.getElementById("ham-btn");
        btn.click();
    }

    return (
        <section id="header">
            <nav
                id="navbar"
                className="navbar fixed-top navbar-expand-lg navbar-dark "
            >
                <a
                    className="navbar-brand"
                    onClick={handleClick}
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    href="#header"
                >
                    <h1>Ramadan Ifatr Party</h1>
                </a>
                <button
                    id="ham-btn"
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                href="#slide"
                            >
                                Slide
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                href="#house-info"
                            >
                                Residence
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                href="#timeline"
                            >
                                Date
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                href="#count-down"
                            >
                                Timer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                href="#invite-note"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
