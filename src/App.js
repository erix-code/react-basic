import logo from './platzi.webp';
import './App.css';
import React from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import {TodoList} from "./Components/TodoList/TodoList";
import TodoSearch from "./Components/TodoSearch/TodoSearch";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import {CreateTodoButton} from "./Components/CreateTodoButton/CreateTodoButton";

function App() {
    let tasks = [{text: "Homework", isCompleted: false},
        {text: "Clean the dishes", isCompleted: true},
        {text: "Create a react app", isCompleted: true},
        {text: "Create a react app", isCompleted: false}
    ];

    return (<React.Fragment>
        <TodoCounter tasksQuantity={tasks.length} completedTasks={2}></TodoCounter>
        <TodoSearch></TodoSearch>
        <TodoList>
            {tasks.map((item, key) => {
                return <TodoItem item={item} key={key}/>
            })}
            {/*Ecmscript 6*/}
            {tasks.map((item, key) => (
                <TodoItem item={item} key={key}></TodoItem>)
            )}
        </TodoList>
        <CreateTodoButton tasks={tasks}></CreateTodoButton>
    </React.Fragment>);
}


export default App;
