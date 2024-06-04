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
import { EmojiList } from "../../Variables/EmojiList";
import TodoForm from "../TodoForm/TodoForm";

function App() {
    const { tasks,saveItem, filteredTasks, isLoading, hasError, showModal, setShowModal} = useContext(TodoContext);
    const { user, setUser } = useContext(AuthContext);
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


            <CreateTodoButton showModal={showModal} setShowModal={setShowModal}></CreateTodoButton>
            {showModal && (
                <Modal>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content bg-secondary">
                                <TodoForm></TodoForm>
                            </div>
                        </div>
                </Modal>
            )}


        </React.Fragment>
    );
}


export default App;
