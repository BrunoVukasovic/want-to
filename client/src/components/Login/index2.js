/*
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import { Container, Layout } from "../components";
import { loginAction } from "../actions/loginAction";
import { logoutAction } from "../actions/logoutAction";
import setAuthToken from "../utils/setAuthToken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      success: false,
      invalid: false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  LogOut = () => {
    axios.get("/api/login/logout").then(res => {
      this.props.removeUserFromStore();
      localStorage.clear();
    });
  };

  Login = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios
      .post("/api/login", { email, password })
      .then(res => {
        const { token } = res.data;
        this.props.saveUserToStore(token);
        localStorage.setItem("token", JSON.stringify(token));
        setAuthToken(token);
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ errorMessage: "Wrong email or password" });
        console.log(error);
      });
  };

  render() {
    const { isAuthenticated } = this.props.isLogged;
    const { errorMessage } = this.state;

    return (
      <Layout>
        {isAuthenticated ? (
          <button className={"Button"} onClick={() => this.LogOut()}>
            Logout
          </button>
        ) : (
          <Container>
            <form className={styles.LoginForm} onSubmit={this.Login}>
              <label className={styles.ErrorInput}>{errorMessage}</label>

              <input
                autoFocus
                type="text"
                name="email"
                className={styles.Input}
                placeholder="Your email address"
                onChange={this.onChange}
                value={this.state.email}
              />

              <input
                type="password"
                name="password"
                className={styles.Input}
                placeholder="Your password"
                onChange={this.onChange}
                value={this.state.password}
              />

              <input type="submit" className={"Button"} value={"Login"} />
            </form>

            <div className={cn(styles.Register, "BorderTop")}>
              <label className={styles.Label}>Dont't have an account?</label>
              <Link to="/register">
                <button className={"Button"}>Register</button>
              </Link>
            </div>
          </Container>
        )}
      </Layout>
    );
  }
}
const mapStateToProp = state => {
  return {
    isLogged: state.isLoggedReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveUserToStore: user => {
      dispatch(loginAction(user));
    },
    removeUserFromStore: () => {
      dispatch(logoutAction());
    }
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);


*/
