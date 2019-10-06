import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Circle = ({ children }) => {
  //  const [route] = useState(`/${children}`);

  const handleClick = e => {
    console.log(`adjkladjlkasdjasdj`);
  };

  return (
    <Link to={`/list/${children}`} category={children}>
      <div className={styles.Circle} onClick={e => handleClick()}>
        {children}
      </div>
    </Link>
  );
};

export default Circle;
