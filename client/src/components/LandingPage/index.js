import React, { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.css";

// El.getBoundingClientRect()

const LandingPage = () => {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // code to run on component mount
    // const rect = this.selector.current.getBoundingClientRect();
    console.log("Landing");
  }, []);

  /*
  handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };  */

  return (
    <Fragment>
      <div className={styles.Container}>
        <div className={styles.MainCircle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
        <div className={styles.Circle}>Want To Do ...</div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
