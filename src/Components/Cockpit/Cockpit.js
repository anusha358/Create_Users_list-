import React, { useEffect } from "react";
import "./Cockpit.css";

function Cockpit(props) {
  // useEffect rendering only when data changes

  // useEffect(() => {
  //   console.log("[cockpit.js useeffect]");
  //   // http request
  //   setTimeout(() => {
  //     alert(" saved data to cloud");
  //   }, 1000);
  // }, [props.users]);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert(" saved data to cloud cockpit");
      console.log("[cockpit.js useeffect]");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js clear time out useeffect]");
    };
  }, []);
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
