import React, { Component } from "react";
import "./User.css";
import Radium from "radium";
import Auxiliary from "../../../hoc/Auxiliary";
class User extends Component {
  render() {
    console.log("[user.js] rendering...");

    const style = {
      "@media (min-width:500px)": {
        width: "450px;",
      },
    };
    return (
      <Auxiliary>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />

        <p onClick={this.props.click}>
          hi i am {this.props.name} and my age is {this.props.age}
        </p>
      </Auxiliary>
    );
  }
}

export default Radium(User);
