import logo from './platzi.webp';
import './App.css';
import React from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import {TodoList} from "./Components/TodoList/TodoList";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import {CreateTodoButton} from "./Components/CreateTodoButton/CreateTodoButton";

function App() {
    let tasks = [
        {emoji: "🔥", text: "Homework", isCompleted: false},
        {emoji: "🔥", text: "Clean the dishes", isCompleted: true},
        {emoji: "🔥", text: "Create a react app", isCompleted: true},
        {emoji: "🔥", text: "Create a react app", isCompleted: false}
    ];

    return (<React.Fragment>
        <TodoCounter tasksQuantity={tasks.length} completedTasks={2}></TodoCounter>
        <TodoSearch></TodoSearch>
        <TodoList>

            {/*Ecmscript 6*/}
            {tasks.map((item, key) => (
                <TodoItem item={item} key={key}></TodoItem>)
            )}
        </TodoList>
        <CreateTodoButton tasks={tasks}></CreateTodoButton>
    </React.Fragment>);
}


export default App;
