import React, {useState} from "react";
import "./TodoCheckBox.scss";

export default function TodoCheckBox({checked}) {
    return (
    <label className="custom-checkbox" >
        <input type="checkbox" checked={checked} />
        <span className="checkmark">
            <i className={"fa-solid fa-check award-icon"}></i>
        </span>
    </label>
    )
}