import React from "react";
import User from "./User/user";

const Users = (props) => {
  return props.users.map((user, index) => {
    return (
      <User
        name={user.name}
        age={user.age}
        key={user.id}
        click={() => props.click(index)}
        changed={(event) => props.changed(event, user.id)}
      />
    );
  });
};

export default Users;
