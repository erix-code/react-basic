import React from "react";

function CreateTodoButton({items}) {
    return(
        <button className={"add-button"}>
            <i className={"fas fa-plus-circle icon-color"} ></i>
        </button>
    )
}

export { CreateTodoButton };