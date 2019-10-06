import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const List = props => {
  const { category } = props.match.params;

  const addNewItem = () => {};
  return (
    <Fragment>
      <div className={styles.Navbar}>
        <Link to="/">Back</Link>
        <p>{category}</p>
        <Link to="/">Home</Link>
      </div>
      <button onClick={() => addNewItem()}>Add new</button>
    </Fragment>
  );
};

export default List;
