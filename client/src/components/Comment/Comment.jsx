import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
export function Comment() {
  const comments = useState((state) => state.comments);
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.input}></div>
      <div className={styles.button}>
        <button onClick="handlesubmit">Submit Comment</button>
      </div>
    </div>
  );
}
