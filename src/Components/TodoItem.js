import React from "react";
function TodoItem(props){
    return (
        <li>
            <p>Llorar {props.item}</p>
            V
            <input title={"O"} value={"D"} type={"checkbox"}/>
            X
            <input title={"X"} type={"checkbox"}/>

        </li>
    )

}
export default TodoItem;