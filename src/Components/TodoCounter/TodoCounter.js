import React from "react";
import "./TodoCounter.scss";
function TodoCounter ({tasksQuantity, completedTasks}) {
    return(
        <>
            <h1 className={"title-counter"}>
                📔 TODO LIST!
            </h1>
            <h2 className={"text-center"}>
                Completed tasks {completedTasks} of {tasksQuantity}
            </h2>
        </>

    )
}

export default TodoCounter;