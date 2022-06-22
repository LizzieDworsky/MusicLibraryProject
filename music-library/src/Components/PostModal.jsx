import React from "react";

const PostModal = (props) => {
    const open = document.getElementById("open");
    const modal_container = document.getElementById("modal_container");
    const close = document.getElementById("close");

    open.addEventListener("click", () => {
        modal_container.classList.add("show");
    });

    close.addEventListener("click", () => {
        modal_container.classList.remove("show");
    });

    return (
        <div className="modal-container" id="modal-container">
            <div className="modal">
                <h1>Learning Modals</h1>
                <button id="close">Close</button>
            </div>
        </div>
    );
};

export default PostModal;
