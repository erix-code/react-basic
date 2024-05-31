import React, {useEffect, useState} from "react";

export  default function useLocalStorageItems(item_name: string) {
    const [ isLoading:boolean, setIsLoading] = useState(true);
    const [ hasError:boolean, setHasError] = useState(false);
    const [ item, setItem ] = useState([]);

    const saveItem = (newItem) => {
        setIsLoading(true);
        localStorage.setItem(item_name, JSON.stringify(newItem));
        setItem(newItem);
        setIsLoading(false);
    };
    const initialize_item = () => {
        setIsLoading(true);
        const storedItem:string | null = localStorage.getItem(item_name);
        let parsedItem;
        if (storedItem) {

            parsedItem = JSON.parse(storedItem);
        } else {
            parsedItem = [];
        }
        setTimeout(()=> {
            setItem(parsedItem);
            setIsLoading(false);
        }, 1000)

    }

    useEffect(() => {
        initialize_item();
    }, []);

    return {item, saveItem, isLoading, hasError};
}

