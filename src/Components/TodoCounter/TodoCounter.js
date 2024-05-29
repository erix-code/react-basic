import React, {useEffect, useState} from "react";
import "./TodoCounter.scss";
function TodoCounter ({tasksQuantity, completedTasks}) {
    const [isCompleted, setIsCompleted] = useState(false);
    const detectComplete = () => {
        if (tasksQuantity === completedTasks) {
            setIsCompleted(true);
            console.log(isCompleted);
        } else {
            setIsCompleted(false);
            console.log(isCompleted);
        }
    }
    useEffect(() => {
        detectComplete();
    }, [completedTasks, tasksQuantity]);
    return(
        <>
            <h1 className={"title-counter"}>
                📔 TODO LIST!
            </h1>
            <h2 className={"text-center"}>
                { isCompleted & tasksQuantity > 0 ? "Great You Have Completed all your tasks 🎉!" : `Completed tasks ${completedTasks} of ${tasksQuantity}` }
            </h2>

        </>

    )
}

export default TodoCounter;