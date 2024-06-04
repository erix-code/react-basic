import React, {useState} from "react";
import useLocalStorageItems from "../Hooks/UseLocalStorageItems";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {item: tasks, saveItem: saveItem, isLoading, hasError} = useLocalStorageItems("TASKS_V1");
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    // Real time filtering getting the completed tasks
    const completedTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase();
        const taskEmoji = task.emoji;
        const lowerCaseSearchText = searchQuery.toLowerCase();

        return ((taskText.includes(lowerCaseSearchText) !== false || taskEmoji.includes(searchQuery) !== false) && task.isCompleted);
    });

    // Real time filtering getting the filtered tasks
    const filteredTasks = tasks.filter((task) => {
        const taskText = task.text.toLowerCase();
        const taskEmoji = task.emoji;

        return (taskText.includes(searchQuery.toLowerCase()) !== false || taskEmoji.includes(searchQuery) !== false);
    });

    return (
        <TodoContext.Provider
            value={{
                tasks, saveItem, isLoading, setSearchQuery,
                hasError, completedTasks, filteredTasks,
                showModal, setShowModal
            }}>
            {children}
        </TodoContext.Provider>);
}


export {TodoContext, TodoProvider}