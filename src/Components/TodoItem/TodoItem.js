import React from "react";
import "./TodoItem.scss";
import TodoCheckBox from "../../Elements/TodoCheckBox/TodoCheckBox";

function TodoItem(props) {

    return (<div className={"row my-2rem"}>
            <div className={"card rounded-end-3 shadow-lg"}>
                <div className={"row justify-content-center "}>
                    <div className="col col-1 text-center align-content-center my-2">
                        <h4>
                            {props.item.emoji}
                        </h4>
                    </div>
                    <div className="col col-9 text-start">
                        <p className={"my-2"}>{props.item.text}</p>
                    </div>
                    <div className="col col-2  bg-primary rounded-end-3 border-colored py-1">
                        <div className="d-flex justify-content-center">
                            <TodoCheckBox checked={props.item.isCompleted}
                                          onClick={!props.item.isCompleted}></TodoCheckBox>
                        </div>
                    </div>
                </div>

                <span className={`position-absolute badge-todo translate-middle badge font-monospace text-dark ${props.item.isCompleted ? "bg-primary-subtle" : "bg-warning-subtle"} `}>
                    <div className={`${props.item.isCompleted ? "d-none" : ""}`}>
                        <i className={`fa-solid fa-circle-exclamation`} ></i> Status: Doing
                    </div>
                    <div className={`${props.item.isCompleted ? "" : "d-none"}`}>
                        <i className={`fa-solid fa-circle-check` }></i> Status: Done
                    </div>
                </span>
            </div>
    </div>)

}

export default TodoItem;