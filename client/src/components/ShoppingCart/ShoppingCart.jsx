import React, { useState } from "react"
import { useLocalStorege } from "../../Hooks/useLocalStorage";

export default function ShoppingCart() {
    const [text, setText] = useLocalStorege('text','')

    return (
        <>
            <textarea onChange={e=>setText(e.target.value)} value={text} ></textarea>
        </>
    );


}