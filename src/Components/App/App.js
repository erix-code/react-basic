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
                            <div className="modal-content bg-secondary-subtle">

                                <div className="modal-body">
                                    <h4 className={"modal-title mb-5 "}>Create New Task</h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-10 col-12">
                                                <div className={"mx-2"}>
                                                    <label htmlFor="title" className={"form-label"}>Title</label>
                                                    <textarea type="text" className={"form-control"} rows={4} id={"title"}/>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-12">
                                                <div className={"mx-2"}>
                                                    <label htmlFor="emoji" className={"form-label"}>Emoji</label>
                                                    <select name="emoji" id="emoji" className={"form-select"}>
                                                        {EmojiList.map((emoji: string) => {
                                                            return <option value={emoji}>{emoji}</option>;
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button className="btn btn-outline-dark" onClick={() => {
                                        setShowModal(!showModal)
                                    }}>Cerrar
                                    </button>
                                    <button className="btn btn-dark">Aceptar</button>
                                </div>
                            </div>
                        </div>
                </Modal>
            )}


        </React.Fragment>
    );
}


export default App;
