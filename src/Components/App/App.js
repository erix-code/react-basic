import './App.css';
import React, {useEffect, useState, useContext} from "react";
import {TodoList} from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoCounter from "../TodoCounter/TodoCounter";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import CustomSpinner from "../../Elements/CustomSpinner/CustomSpinner";
import ErrorMessage from "../../Elements/Messages/ErrorMessage";
import CreateTaskMessage from "../../Elements/Messages/CreateTaskMessage";
import Modal from "../../Elements/Modal/Modal";
import {TodoContext, TodoProvider} from "../../Contexts/TodoContext";
import {AuthContext} from "../../Contexts/AuthContext";
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
    const { tasks,saveItem, filteredTasks, isLoading, hasError, showModal, setShowModal} = useContext(TodoContext);
    const { user, setUser } = useContext(AuthContext);
    console.log("User is", user);
    return (
        <React.Fragment>
            <TodoCounter></TodoCounter>
            <TodoSearch/>
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

            <button className="btn btn-primary" onClick={() => {
                setUser(2);
            }}>
                Change user
            </button>

            <CreateTodoButton showModal={showModal} setShowModal={setShowModal}></CreateTodoButton>
            {showModal && (
                <Modal >
                    La funcionalidad de agregar Todos
                </Modal>
            )}



        </React.Fragment>
    );
}


export default App;
