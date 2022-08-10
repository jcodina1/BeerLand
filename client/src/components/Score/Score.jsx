import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Style from '../Score/Score.module.css'
import { useAuth } from '../Context/Contestautenticacion';
import { useSelector } from 'react-redux';
import { helpCallScores, postScore } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions';
import Swal from 'sweetalert2';

const Star = ({id}) => {
    
    const dispatch = useDispatch()
    const user2 = useSelector((state) => state.user);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const {user} = useAuth()
    
   if (user !== null) {
        var filtrado = user2.filter((e) => e.email === user.email);
        
    }

    function HandleSubmit() {
        if (user !== null) {
            var obj = {
                score:rating,
                userId: filtrado[0].id,
                beerId:id
            }
            dispatch(postScore(obj))
        }  else
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must login first to do this!",
          });

    }

    function handleSet(ratingValue) {
        if (user !== null) {
            setRating(ratingValue)
        } else
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first to do this!",
        });
    }

    
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {

    if (user!== null) {
        var obje = {
            idUser:filtrado[0].id,
            idBeer:id
        }
        
        helpCallScores(`score/scores?idUser=${obje.idUser}&idBeer=${obje.idBeer}`)
        .then(res => setRating(res.score))
    }
  }, [user]);
 

    return <div className={Style.dis}>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <div key={i}>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={(e) => handleSet(ratingValue)}
                        className={Style.input}
                       
                    />
                    <FaStar
                        className={Style.star}
                        color={ratingValue <= (hover || rating) ? "#c68308" : "#624c3d"} size={24}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
               
                </div>
            )
        })}
        {/* <p>Your rating is: {rating}</p> */}
         <button className={Style.button} type='submit' onClick={e=>HandleSubmit(e)}>Rate</button>
    </div>
}

export default Star












/* import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

export default function Stars({ rating }) {
    var stars = [false, false, false, false, false];
    return (
        <div>
            {stars.forEach((e, i) => {
                if (i <= rating - 1) stars.splice(i, 1, true)
            })}
            {stars.map((e, i) => e ? <AiFillStar key={i} className="stars" /> : <AiOutlineStar key={i} />)}
        </div>
    )
} */