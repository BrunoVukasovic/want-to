import React, { Fragment, useState } from "react";
import { Circle } from "../";
import styles from "./styles.module.css";

const LandingPage = () => {
  /*
  state = {
    freeSpots: [3, 4, 6, 7, 8],
    takenSpots: [1, 2, 5]
  };  */
  const [spots, setSpots] = useState({
    freeSpots: [3, 4, 6, 7, 8],
    takenSpots: [1, 2, 5]
  });

  // render() {
  return (
    <Fragment>
      <button>Log In</button>
      <div className={styles.Container}>
        <div className={styles.MainCircle}>Want To Do ...</div>
        <div className={styles.CircleNewItem}>Something new?</div>
        <Circle>Movies</Circle>
        <Circle>Books</Circle>
        <Circle>Trips</Circle>
      </div>
    </Fragment>
  );
  // }
};

export default LandingPage;
