import React from "react";

function CreateTodoButton({showModal, setShowModal}) {
    return(
        <button className={"add-button"} onClick={() => {setShowModal(!showModal)}}>
            <i className={"fas fa-plus-circle icon-color"} ></i>
        </button>
    )
}

export { CreateTodoButton };