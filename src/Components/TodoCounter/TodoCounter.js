import React from "react";
import "./TodoCounter.scss";
function TodoCounter ({tasksQuantity, completedTasks}) {
    return(
        <h1 className={"title-counter bg-primary"}>
            Completed tasks {completedTasks} of {tasksQuantity}
        </h1>
    )
}
export default TodoCounter;