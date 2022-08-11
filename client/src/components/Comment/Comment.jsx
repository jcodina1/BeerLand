import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsBeer, getUser, postComment } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import styles from "./styles.module.css";
import InputEmoji from "react-input-emoji";
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';

export function Comment({id}) {

  const i = useSelector(state => state.detail.id)
  const comments = useSelector(state => state.comments)
  
  const { user } = useAuth()
  const user2 = useSelector(state => state.user)
  if (user !== null) {
    var filtrado = user2.filter((e) => e.email === user.email);
  }



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommentsBeer(id))
  }, [])
  
  const [text, setText] = useState("");


  function handleSubmit(){
    if (user !== null) {
      let obj=
      { 
        "comment":text,
        "userId":filtrado[0].id
        }
    
    dispatch(postComment(obj,id)).then(res=>dispatch(getCommentsBeer(id)))
    }else
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must login first to do this!",
    });
    
  }
  function handleOnEnter(text) {
    
    let obj=
      { 
        "comment":text,
        "userId":filtrado[0].id
        }
    
        handleSubmit()
  }
  return (
    <div className={styles.container}>
      <div className={styles.commentsform}>
        <div className={styles.input}>
        <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
        </div>
        <div className={styles.button}>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
      <div className={styles.commentsContainer}>
        <h4>Comments:</h4>
        {
          <div className={styles.comment}>{comments.map(e =>
            <div key={e.id} >
              <h5>{e.user.name}</h5>
              <p>{e.comment}</p>
              <p>Create at:</p>
              <p>{e.createdAt.split("T")[0]}</p>    
            </div>)}
          </div>
        }
      </div>
    </div>
  );
}
