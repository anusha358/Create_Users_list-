import React from "react";
import "./User.css";
import Radium from "radium";
const User = (props) => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px;",
    },
  };
  return (
    <div className="User" style={style}>
      <input type="text" onChange={props.changed} value={props.name} />

      <p onClick={props.click}>
        hi i am {props.name} and my age is {props.age}
      </p>
    </div>
  );
};

export default Radium(User);
