import React, {useState} from "react";
import "./CustomSpinner.scss";

export default function CustomSpinner() {
    return (
        <div className={"container text-center custom-spinner"}>
            <div className="spinner-grow text-primary m-4" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-primary m-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary m-4" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}