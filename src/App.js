import logo from './platzi.webp';
import './App.css';
import React, {useEffect, useState} from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import {TodoList} from "./Components/TodoList/TodoList";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import {CreateTodoButton} from "./Components/CreateTodoButton/CreateTodoButton";

let defaultTasks = [
    {emoji: "💀", text: "Homework", isCompleted: false, status:"pending"},
    {emoji: "💀", text: "Clean the dishes", isCompleted: false, status:"completed"},
    {emoji: "🔥", text: "Create a react app", isCompleted: false, status:"completed"},
    {emoji: "🔥", text: "Create a new Laravel app", isCompleted: true, status:"pending"},
    {emoji: "🔥", text: "Create a new Laravel 6.3 app", isCompleted: false, status:"pending"},
    {emoji: "🔥", text: "Create a new Laravel 4.5 app", isCompleted: true, status:"pending"}
];
function App() {
    let [tasks, setTasks] = useState(defaultTasks);
    const [searchQuery, setSearchQuery] = useState("");

    // Real time filtering getting the completed tasks
    const completedTasks = tasks.filter(task => {
        if ((task.text.toLowerCase().includes(searchQuery.toLowerCase()) !== false || task.emoji.includes(searchQuery) !== false) && task.isCompleted) {
            return true;
        }
        return false;
    });

    // Real time filtering getting the filtered tasks
    const filteredTasks = tasks.filter((task) => {
        if (task.text.toLowerCase().includes(searchQuery.toLowerCase()) !== false || task.emoji.includes(searchQuery) !== false) {
            return true;
        } else {
            return false;
        }
    });
    console.log(filteredTasks);


    return (
    <React.Fragment>
        <TodoCounter tasksQuantity={filteredTasks.length} completedTasks={completedTasks.length}></TodoCounter>
        <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TodoList>

            {/*Ecmscript 6*/}
            {filteredTasks.map((item, key) => (
                <TodoItem item={item} key={key}></TodoItem>)
            )}
        </TodoList>
        <CreateTodoButton tasks={tasks}></CreateTodoButton>
    </React.Fragment>);
}


export default App;
