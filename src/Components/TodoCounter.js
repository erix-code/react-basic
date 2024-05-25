import React from "react";

function TodoCounter ({tasksQuantity, completedTasks}) {
    return(<h1>Completed tasks {completedTasks} of {tasksQuantity}</h1>)
}
export default TodoCounter;