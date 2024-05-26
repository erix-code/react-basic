import React from "react";


function CreateTodoButton({items}) {
    function createButton(){
        const value = document.querySelector("#todo-search").value
        console.log(items);
        items.push({name: value});
    }
    return(
        <div>
            <button onClick={createButton}>Create task</button>
        </div>
    )
}

export { CreateTodoButton };