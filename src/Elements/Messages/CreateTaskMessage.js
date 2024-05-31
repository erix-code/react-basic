import React, {useState} from "react";
import "./Messages.scss";

export default function CreateTaskMessage() {
    return (
        <div className={"container text-center custom-text"}>
            <div className={"icon-warning shake-left-right icon-center-span"}>
                ✍️
            </div>

            <p className={"text-danger m-0"}>
                There are no Tasks
            </p>
            <p className={"text-dark"}>
                You have to create a new task
            </p>
        </div>
    )
}