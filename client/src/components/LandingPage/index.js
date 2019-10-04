import React, { Component, Fragment } from "react";
import { Circle } from "../";
import styles from "./styles.module.css";

export default class LandingPage extends Component {
  state = {
    freeHorizontalSpots: [3],
    takenHorizontalSpots: [2],
    takenVerticalSpots: [2],
    freeSpots: [3, 4, 6, 7, 8],
    takenSpots: [1, 2, 5]
  };

  handleClick = () => {
    console.log("clik");
  };
  render() {
    return (
      <Fragment>
        <button>Log In </button>
        <div className={styles.Container}>
          <div className={styles.MainCircle}>Want To Do ...</div>
          <div className={styles.CircleNewItem} onClick={this.handleClick}>
            Something new?
          </div>
          <Circle>Movies</Circle>
          <Circle>Books</Circle>
          <Circle>Trips</Circle>
        </div>
      </Fragment>
    );
  }
}
