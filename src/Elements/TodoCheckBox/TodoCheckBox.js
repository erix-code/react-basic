import React, {useState} from "react";
import "./TodoCheckBox.scss";

export default function TodoCheckBox({checked}) {
    const [isChecked, setIsChecked] = useState(checked);
    function changeValue() {
        setIsChecked(!isChecked) ;
    }
    return (
    <label className="custom-checkbox" >
        <input type="checkbox" checked={isChecked} onChange={changeValue} />
        <span className="checkmark">
            <i className={"fa-solid fa-check award-icon"}></i>
        </span>
    </label>
    )
}