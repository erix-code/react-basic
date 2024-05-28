import logo from './platzi.webp';
import './App.css';
import React, {useEffect, useState} from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import {TodoList} from "./Components/TodoList/TodoList";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import {CreateTodoButton} from "./Components/CreateTodoButton/CreateTodoButton";

let defaultTasks = [
    {id:1, emoji: "💀", text: "Homework", isCompleted: false, status:"pending"},
    {id:2, emoji: "💀", text: "Clean the dishes", isCompleted: false, status:"completed"},
    {id:3, emoji: "🔥", text: "Create a react app", isCompleted: false, status:"completed"},
    {id:4, emoji: "🔥", text: "Create a new Laravel app", isCompleted: true, status:"pending"},
    {id:5, emoji: "🔥", text: "Create a new Laravel 6.3 app", isCompleted: false, status:"pending"},
    {id:6, emoji: "🔥", text: "Create a new Laravel 4.5 app", isCompleted: true, status:"pending"}
];
function App() {
    let [tasks, setTasks] = useState(defaultTasks);
    const [searchQuery, setSearchQuery] = useState("");

    // Real time filtering getting the completed tasks
    const completedTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase();
        const taskEmoji = task.emoji;
        const lowerCaseSearchText = searchQuery.toLowerCase();

        return ((taskText.includes(lowerCaseSearchText) !== false || taskEmoji.includes(searchQuery) !== false) && task.isCompleted);
    });

    // Real time filtering getting the filtered tasks
    const filteredTasks = tasks.filter((task) => {
        const taskText = task.text.toLowerCase();
        const taskEmoji = task.emoji;

        return (taskText.includes(searchQuery.toLowerCase()) !== false || taskEmoji.includes(searchQuery) !== false);
    });

    return (
    <React.Fragment>
        <TodoCounter tasksQuantity={filteredTasks.length} completedTasks={completedTasks.length}></TodoCounter>
        <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TodoList tasks={tasks} filteredTasks={filteredTasks} setTasks={setTasks}   />
        <CreateTodoButton tasks={tasks}></CreateTodoButton>
    </React.Fragment>);
}


export default App;
