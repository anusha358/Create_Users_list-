import React, { Component } from "react";
import "./App.css";
import Users from "../Components/Users/Users";
import Radium, { StyleRoot } from "radium";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    users: [
      {
        id: "545421",
        name: "anusha",
        age: "30",
        description: "softwaredeveloper",
      },
      {
        id: "785212",
        name: "pradeep",
        age: "31",
        description: "senior softwaredeveloper",
      },
    ],
    otherState: " some other value",
    showUsers: false,
  };

  nameChangeHandler = (event, id) => {
    const userIndex = this.state.users.findIndex((user) => {
      return user.id === id;
    });
    const user = { ...this.state.users[userIndex] };
    user.name = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = user;
    this.setState({ users: users });
  };

  toggleUserHandler = (event) => {
    const doesShow = this.state.showUsers;
    this.setState({ showUsers: !doesShow });
  };
  deleteUserHandler = (usersIndex) => {
    const users = [...this.state.users];
    users.splice(usersIndex, 1);
    this.setState({ users: users });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightGreen",
        color: "black",
      },
    };

    let users = null;
    if (this.state.showUsers) {
      users = (
        <Users
          users={this.state.users}
          click={this.deleteUserHandler}
          changed={this.nameChangeHandler}
        />
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "pink",
        color: "black",
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            users={this.state.users}
            showUsers={this.state.showUsers}
            clicked={this.toggleUserHandler}
          />

          {users}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
