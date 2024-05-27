import React from "react";
import "./TodoCheckBox.scss";
export default function TodoCheckBox({checked}) {
    function changeValue() {
        console.log("Current value");
        console.log(checked);
        checked = !checked;
        console.log("cliked");
    }
    return (
    <label className="custom-checkbox" onClick={changeValue}>
        <input type="checkbox" checked={checked} />
        <span className="checkmark">
            <i className={"fa-solid fa-check award-icon"}></i>
        </span>
    </label>
    )
}