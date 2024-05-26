import React from "react";
function TodoItem(props){
    return (
        <>
            <li>
                <p>{props.item.text}</p>
                V
                <input title={"O"} value={"D"} type={"checkbox"}/>
                X
                <input title={"X"} type={"checkbox"} checked={props.item.isCompleted ? true : false}/>

            </li>
        </>
    )

}

export default TodoItem;