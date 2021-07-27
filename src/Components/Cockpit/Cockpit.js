import React from "react";
import "./Cockpit.css";

function Cockpit(props) {
  const classes = [];

  if (props.users.length === 1) {
    classes.push("red");
  }
  if (props.users.length < 1) {
    classes.push(" red bold");
  }

  return (
    <div>
      <p className={classes.join(" ")}>
        Hurray! you have {props.users.length} users
      </p>
      <button style={props.style} onClick={props.clicked}>
        Toggle Users
      </button>
    </div>
  );
}

export default Cockpit;
