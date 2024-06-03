import React, {useContext, useEffect, useState} from "react";
import "./TodoCounter.scss";
import {TodoContext} from "../../Contexts/TodoContext";
function TodoCounter () {
    //Another way of using context
    const { completedTasks, filteredTasks} = useContext(TodoContext);
    const [isCompleted, setIsCompleted] = useState(false);
    const detectComplete = () => {
        if (filteredTasks.length === completedTasks.length) {
            setIsCompleted(true);
            console.log(isCompleted);
        } else {
            setIsCompleted(false);
            console.log(isCompleted);
        }
    }
    useEffect(() => {
        detectComplete();

    }, [completedTasks, filteredTasks]);
    return(
        <>
            <h1 className={"title-counter"}>
                📔 TODO LIST!
            </h1>
            <h2 className={"text-center"}>
                { isCompleted & filteredTasks.length > 0 ?
                    "Great You Have Completed all your tasks 🎉!" :
                    `Completed tasks ${completedTasks.length} of ${filteredTasks.length}` }
            </h2>

        </>

    )
}

export default TodoCounter;