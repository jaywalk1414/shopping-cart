import { useEffect, useState } from "react";


export function useLocalStorage<T>(key : string, initialValue : T | (() => T)){

    const [value, setValue] = useState<T>(() => {

        const savedValue = localStorage.getItem(key);

        if(savedValue != null) return JSON.parse(savedValue);

        if(typeof initialValue === "function") {
            return (initialValue as (() => T))()
        }else{
            return initialValue
        }
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])


    return [value, setValue] as [typeof value, typeof setValue]

}