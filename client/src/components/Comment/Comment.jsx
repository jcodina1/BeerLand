import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsBeer } from "../../redux/actions";
import styles from "./styles.module.css";
export function Comment() {
  
 const idBeer=useSelector(state=>state.detail.id)
console.log(idBeer);
 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCommentsBeer(idBeer))

  },[dispatch])
  
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.input}>HOLA</div>
      <div className={styles.button}>
        <button onClick="handlesubmit">Submit Comment</button>
      </div>
    </div>
  );
}
