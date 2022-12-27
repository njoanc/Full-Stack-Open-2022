import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Notification = ({ notification }) => {
  return <>{notification && <Alert>{notification}</Alert>}</>;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification.message,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
