import React from "react";

function CreateTodoButton({items}) {
    function createButton(){
        const value = document.querySelector("#todo-search").value
        console.log(items);
        items.push({name: value});
    }
    return(
        <div className={"fixed-bottom text-end"}>
            <button className={"add-button"} onClick={createButton}>
                <i className={"fas fa-plus-circle icon-color"} ></i>
            </button>
        </div>
    )
}

export { CreateTodoButton };