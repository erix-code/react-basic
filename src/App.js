import logo from './platzi.webp';
import './App.css';
import React, {useEffect, useState} from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import {TodoList} from "./Components/TodoList/TodoList";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import {CreateTodoButton} from "./Components/CreateTodoButton/CreateTodoButton";

let tasks = [
    {emoji: "🔥", text: "Homework", isCompleted: false, status:"pending"},
    {emoji: "🔥", text: "Clean the dishes", isCompleted: true, status:"completed"},
    {emoji: "🔥", text: "Create a react app", isCompleted: true, status:"completed"},
    {emoji: "🔥", text: "Create a new Laravel app", isCompleted: true, status:"pending"},
    {emoji: "🔥", text: "Create a new Laravel app", isCompleted: true, status:"pending"},
    {emoji: "🔥", text: "Create a new Laravel app", isCompleted: false, status:"pending"}
];
function App() {
    const [todoTasks, setTodoTasks] = useState(tasks);
    const [searchQuery, setSearchQuery] = useState("");
    const [completedTasks, setCompletedTodos] = useState(todoTasks.filter(task => {
        return task.isCompleted
    }));

    return (
    <React.Fragment>
        <TodoCounter tasksQuantity={todoTasks.length} completedTasks={completedTasks.length}></TodoCounter>
        <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}></TodoSearch>
        <TodoList>

            {/*Ecmscript 6*/}
            {todoTasks.map((item, key) => (
                <TodoItem item={item} key={key}></TodoItem>)
            )}
        </TodoList>
        <CreateTodoButton tasks={todoTasks}></CreateTodoButton>
    </React.Fragment>);
}


export default App;
