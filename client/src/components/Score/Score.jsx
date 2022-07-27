import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

export default function Stars({ score }) {
    var stars = [false, false, false, false, false];
    return (
        <div>
            {stars.forEach((e, i) => {
                if (i <= score - 1) stars.splice(i, 1, true)
            })}
            {stars.map((e, i) => e ? <AiFillStar key={i} className="stars" /> : <AiOutlineStar key={i} />)}
        </div>
    )
}