import { useState } from "react";

function Users(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.name}>
            <span>{user.name} </span>
            <span>{user.city} </span>
            <span>{user.age} </span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
