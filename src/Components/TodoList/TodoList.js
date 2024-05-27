import React from "react";
import "./TodoList.scss";
function TodoList(props) {
    return(
        <div className={"container px-3 py-3"}>
            {props.children}
        </div>
    )
}

export { TodoList };