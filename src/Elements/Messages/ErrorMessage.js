import React, {useState} from "react";
import "./Messages.scss";

export default function ErrorMessage() {
    return (
        <div className={"container text-center custom-text"}>
            <div className={"icon-warning  icon-center-span"}>
                😵
            </div>

            <p className={"text-danger m-0"}>
                There is an Error
            </p>
            <p className={"text-dark"}>
                Please contact with the Developer Team.
            </p>
        </div>
    )
}