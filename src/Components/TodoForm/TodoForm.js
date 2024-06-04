import React, {useContext, useEffect, useState} from "react";
import {EmojiList} from "../../Variables/EmojiList";
import {TodoContext} from "../../Contexts/TodoContext";

export default function TodoForm() {
    const {showModal, setShowModal, tasks, saveItem: saveTasks} = useContext(TodoContext);
    const [newTask, setNewTask] = useState({id: "", emoji: "👻", text: "", isCompleted: false, status: "pending"});

    const addTask = (event) => {
        event.preventDefault();
        const newTasks = [...tasks];
        newTasks.push(newTask);
        saveTasks(newTasks);
        setShowModal(false);
    }
    const settingNewId = () => {
        //Getting last Task ID
        const newId = 1;
        if (tasks[tasks.length-1]) {
            const lastId = tasks[tasks.length-1].id;
            const newId = lastId + 1
            setNewTask({...newTask, id: newId} )
        } else {
            setNewTask({...newTask, id: newId} )
        }
    }
    const updateField = (event, field) => {
        const updatedTask = {...newTask}
        updatedTask[field] = event.target.value;
        setNewTask(updatedTask);
    }
    useEffect(() => {
        settingNewId();
    }, [tasks]);
    return (
        <>
            <form onSubmit={(event) => addTask(event)}>

                <div className="modal-body">
                    <h4 className={"modal-title mb-5 "}>Create New Task</h4>
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <div className={"mx-2"}>
                                <label htmlFor="title" className={"form-label"}>Title</label>
                                <textarea value={newTask.text}
                                          onChange={(event) => {
                                              updateField(event, "text")
                                          }}
                                          type="text"
                                          className={"form-control"} rows={4} id={"title"}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-12">
                            <div className={"mx-2"}>
                                <label htmlFor="emoji" className={"form-label"}>Emoji</label>

                                <select onChange={(event) => {
                                    updateField(event, "emoji")
                                }}
                                        name="emoji" id="emoji" className={"form-select"}>
                                    {EmojiList.map((emoji: string, key) => {
                                        return <option key={key} value={emoji}>{emoji}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                    <button className="btn btn-outline-dark" type={"button"} onClick={() => {
                        setShowModal(false)
                    }}>Cerrar
                    </button>
                    <button className="btn btn-dark" type={"submit"}>
                        Aceptar
                    </button>
                </div>
            </form>

        </>
    )
}