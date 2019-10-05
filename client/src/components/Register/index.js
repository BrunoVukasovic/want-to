import axois from "axios";
import React, { Fragment, useState } from "react";
import styles from "./styles.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);

      /*
      const newUser = {
        name,
        email,
        password
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const body = JSON.stringify(newUser);
        const res = await axois.post("/user/register", body, config);
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      } */
    }
  };

  return (
    <Fragment>
      <h1>Register:</h1>

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
        <input
          autoFocus
          type="text"
          name="password2"
          className={styles.Input}
          placeholder="Repeat password..."
          onChange={e => onChange(e)}
          value={password2}
          required
          minLength="1"
        />
        <input
          autoFocus
          type="text"
          name="name"
          className={styles.Input}
          placeholder="Your first name"
          onChange={e => onChange(e)}
          value={name}
          required
        />

        <input type="submit" className={"Button"} value={"Register"} />
      </form>
    </Fragment>
  );
};

export default Register;
