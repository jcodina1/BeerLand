import { useState } from "react";
export function useLocalStorege(key,initialValue){
    const [storedValue,setStoresdValue]= useState(()=>{
try {
    const item= window.localStorage.getItem(key)
    return item ? JSON.parse(item): initialValue
} catch (error) {
    return initialValue
}
    })
    
    const setValue=value=>{
        try {
            setStoresdValue(value)
            window.localStorage.setItem(key,JSON.stringify(value))
        } catch (e) {
            console.error(e)
        }
    }
    return [storedValue,setValue]
}