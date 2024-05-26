import React from "react";

function TodoList(props) {
    return(
        <div className={"container text-center m-1"}>
            {props.children}
        </div>
    )
}

export { TodoList };