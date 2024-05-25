import React from "react";

function TodoList(props) {
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export { TodoList };