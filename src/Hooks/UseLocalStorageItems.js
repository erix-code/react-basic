import React, {useState} from "react";

export  default function useLocalStorageItems(item_name: string) {
    const [ items, setItems ] = useState(() => {
        const storedTasks = localStorage.getItem(item_name);
        if (storedTasks) {
            return JSON.parse(storedTasks);
        } else {
            return [];
        }
    });
    const saveItems = (newItems) => {
        localStorage.setItem(item_name, JSON.stringify(newItems));
        setItems(newItems);
    };

    return [ items, setItems, saveItems];
}

