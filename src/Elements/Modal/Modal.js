import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
export default function Modal ({children}) {
    return ReactDOM.createPortal(
        <div className={"modal"}>
            {children}
        </div>,
        document.getElementById("modal-section")
    );
}