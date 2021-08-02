import React, { Component } from "react";
import User from "./User/user";

class Users extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[persons.js] getDerivedStateFromProps");
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[persons.js] should component update");
    if (nextProps.users !== this.props.users) {
      return true;
    } else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps, nextState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[persons.js] component did update");
    console.log(snapShot);
  }
  render() {
    console.log("[users.js] rendering...");
    return this.props.users.map((user, index) => {
      return (
        <User
          name={user.name}
          age={user.age}
          key={user.id}
          click={() => this.props.click(index)}
          changed={(event) => this.props.changed(event, user.id)}
        />
      );
    });
  }
}

export default Users;
