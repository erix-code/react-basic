import React, {useEffect, useState} from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
function TodoList({ filteredTasks, tasks, setTasks}) {
    const removeTask = (id) => {
        const newTasks: [] = [...tasks];
        const index = tasks.findIndex((task) => {
            return task.id === id
        });
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    const completeTask = (id) => {
        const newTasks: [] = [...tasks];
        const index = tasks.findIndex((task) => {
            return task.id === id
        });
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        console.log(newTasks);
        setTasks(newTasks);
    };

    return(
        <div className={"container px-3 py-3"}>
            {/*Ecmscript 6*/}
            {filteredTasks.map((item, key) => (
                <TodoItem item={item} key={key} id={item.id} removeTask={removeTask} completeTask={completeTask}></TodoItem>)
            )}
        </div>
    )
}

export { TodoList };