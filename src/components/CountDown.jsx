import React, { useState } from "react";
import Duration from "duration-js";
import Clock from "./Clock";

function CountDown() {
    let date1 = new Date("2022 4 23 7:15 PM");
    const [duration, setDuration] = useState({});

    function getDuration() {
        let date2 = new Date();

        let diff = new Duration(date1 - date2);

        setDuration({
            hours: diff.hours(),
            mins: diff.minutes() % 60,
            secs: diff.seconds() % 60,
        });
    }
    
    setInterval(getDuration, 1000);

    return (
        <section id="count-down">
            <div className="main">
                <div className="row">
                    <div className="col-lg-5 bg-container">
                        <div className="bg-color">
                            <div className="title">
                                <div className="content">
                                    <h4>Time left for</h4>
                                    <h1>Iftar Party</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 my-auto clock">
                        <Clock duration={duration} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
