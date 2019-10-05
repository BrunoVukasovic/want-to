import axois from "axios";
import cn from "classnames";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(formData);
    const user = {
      email,
      password
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(user);
      const res = await axois.post("/login", body, config);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Fragment>
      <h1>Log In:</h1>

      <form onSubmit={e => handleSubmit(e)} className={styles.LoginForm}>
        {/*invalid ? (
          <p className={styles.ErrorInput}>{errors[0].message}</p>
      ) : null */}
        <input
          autoFocus
          type="text"
          name="email"
          className={styles.Input}
          placeholder="Your email address"
          onChange={e => onChange(e)}
          value={email}
          required
        />
        <input
          autoFocus
          type="text"
          name="password"
          className={styles.Input}
          placeholder="Your password..."
          onChange={e => onChange(e)}
          value={password}
          required
          minLength="1"
        />

        <input type="submit" className={"Button"} value={"Login"} />
      </form>

      <div className={cn(styles.Register, "BorderTop")}>
        <label className={styles.Label}>Dont't have an account?</label>
        <Link to="/register">
          <button className={"Button"}>Register</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
