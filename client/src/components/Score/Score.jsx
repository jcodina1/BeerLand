import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Style from '../Score/Score.module.css'

const Star = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className={Style.input}
                    />
                    <FaStar
                        className={Style.star}
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={24}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
        <p>Your score is: {rating}</p>
    </div>
}

export default Star












/* import { AiFillStar } from "react-icons/ai"
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
} */