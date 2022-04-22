import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function DevQuote() {
    return (
        <section id="dev-quote">
            <div className="inner-content">
                <h3>
                    My Father and Grand Father have arranged a Iftar Party in
                    our Residence. We want you and Friends there to share our
                    Happiness and give us a chance to Thank You....
                </h3>
                <div className="left-align">
                    <h3>
                        --- With Love <FontAwesomeIcon icon={faHeart} />
                    </h3>
                    <h1>Aafiya &<span className="break"></span> Aaliya</h1>
                </div>
            </div>
        </section>
    );
}

export default DevQuote;
