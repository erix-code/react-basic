import './App.css';
import React, {useEffect, useState} from "react";
import {TodoList} from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoCounter from "../TodoCounter/TodoCounter";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import useLocalStorageItems from "../../Hooks/UseLocalStorageItems";
import CustomSpinner from "../../Elements/CustomSpinner/CustomSpinner";
import ErrorMessage from "../../Elements/Messages/ErrorMessage";
import CreateTaskMessage from "../../Elements/Messages/CreateTaskMessage";
import {TodoContext, TodoProvider} from "../../Contexts/TodoContext";
// INIT THE TASKS
// let defaultTasks = [
//     {id:1, emoji: "💀", text: "Homework", isCompleted: false, status:"pending"},
//     {id:2, emoji: "💀", text: "Clean the dishes", isCompleted: false, status:"completed"},
//     {id:3, emoji: "🔥", text: "Create a react app", isCompleted: false, status:"completed"},
//     {id:4, emoji: "🔥", text: "Create a new Laravel app", isCompleted: true, status:"pending"},
//     {id:5, emoji: "🔥", text: "Create a new React 6.3 app", isCompleted: false, status:"pending"},
//     {id:6, emoji: "🔥", text: "Create a new Laravel 4.5 app", isCompleted: true, status:"pending"},
//     {id:7, emoji: "🔥", text: "Create a new Angular 4.5 app", isCompleted: true, status:"pending"}
// ];
// localStorage.setItem("TASKS_V1", JSON.stringify(defaultTasks));
// localStorage.removeItem("TASKS_V1");

function App() {

    return (
        <TodoProvider>
            <TodoContext.Consumer>
                {({tasks,saveItem, completedTasks, filteredTasks, searchQuery, setSearchQuery, isLoading, hasError}) => (
                    <React.Fragment>
                        <TodoCounter tasksQuantity={filteredTasks.length}
                                     completedTasks={completedTasks.length}></TodoCounter>
                        <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                        {isLoading &&
                            <CustomSpinner/>
                        }
                        {hasError && <ErrorMessage/>}
                        {(!isLoading && tasks.length === 0 && !hasError) &&
                            <CreateTaskMessage/>
                        }
                        {tasks.length > 0 &&
                            <TodoList tasks={tasks} filteredTasks={filteredTasks} saveTasks={saveItem}/>
                        }
                        <CreateTodoButton tasks={tasks}></CreateTodoButton>
                    </React.Fragment>)}
            </TodoContext.Consumer>
        </TodoProvider>
    );
}


export default App;
