import React, {useState} from "react";
import "./TodoCheckBox.scss";

export default function TodoCheckBox({checked, onClickCheck, id}) {
    return (
    <label className="custom-checkbox" >
        <input type="checkbox" checked={checked} readOnly={true}/>
        <span className="checkmark" onClick={ onClickCheck }>
            <i className={"fa-solid fa-check award-icon"}></i>
        </span>
    </label>
    )
}