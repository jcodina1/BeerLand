import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsBeer, getUser } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import styles from "./styles.module.css";
export function Comment() {
  const i = useSelector((state) => state.detail.id);
  const comments = useSelector((state) => state.comments);
  const { user } = useAuth();
  const user2 = useSelector((state) => state.user);
  if (user !== null) {
    var filtrado = user2.filter((e) => e.email === user.email);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getCommentsBeer(1));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.commentsform}>
        <div className={styles.input}>
          <input />
        </div>
        <div className={styles.button}>
          <button onClick="handlesubmit">Submit Comment</button>
        </div>
        <div className={styles.commentsContainer}>
          <h4>Comments:</h4>
          {
            <div>
              <p>{}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
