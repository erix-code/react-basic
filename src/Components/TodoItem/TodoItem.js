import React from "react";
import "./TodoItem.scss";
import TodoCheckBox from "../../Elements/TodoCheckBox/TodoCheckBox";
function TodoItem(props){
    return (
        <div className={"row my-3"}>
            <div className={"card rounded-end-3 shadow-lg"}>
                <div className={"row justify-content-center "}>
                    <div className="col col-1 text-center align-content-center">
                        <h4>
                            {props.item.emoji}
                        </h4>
                    </div>
                    <div className="col col-9 text-start">
                        <h4 className={"my-2"}>{props.item.text}</h4>
                    </div>
                    <div className="col col-2  bg-primary rounded-end-3 border-colored ">
                        <div className="d-flex justify-content-center">
                            <TodoCheckBox checked={props.item.isCompleted}
                                          onClick={!props.item.isCompleted}></TodoCheckBox>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default TodoItem;