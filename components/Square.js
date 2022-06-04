import React, { useState } from "react";
import styles from "./Square.module.css";

const Square = ({ value, onClick }) => {
  return (
    <div>
      <button className={styles.square} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
