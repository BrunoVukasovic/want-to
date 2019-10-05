import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={styles.Alert}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// map redux state to props of the component
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
