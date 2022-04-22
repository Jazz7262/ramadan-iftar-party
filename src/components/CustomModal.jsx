import React, { useEffect } from "react";

function CustomModal() {
    function handleOpenClick(event) {
        event.target.setAttribute("data-toggle", "modal");
        event.target.setAttribute("data-target", "#custom-modal");
    }

    function handleCloseClick(event) {
        event.target.setAttribute("data-dismiss", "modal");
        document.getElementById("close-modal-btn").click();
        document.getElementById("audio").play();
    }

    useEffect(() => {
        var openModal = document.querySelector("#open-modal-btn");
        openModal.click();
        openModal.style.display = "none";
    }, []);

    return (
        <section id="my-modal">
            <button
                className="btn btn-prmary"
                id="open-modal-btn"
                onClick={handleOpenClick}
            >
                Open Modal
            </button>
            <div className="modal fade" id="custom-modal">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Iftar Party Invitation</h1>
                        </div>
                        <div className="modal-body">
                            <p>From:</p>
                            <h2>T. Basha &</h2>
                            <h2>T. Haji Basha</h2>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn"
                                id="close-modal-btn"
                                onClick={handleCloseClick}
                            >
                                Open
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomModal;
