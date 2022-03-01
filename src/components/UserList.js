import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  console.log(props.students);
  return (
    <div>
      
      <h1 className="d-flex justify-content-center">User list</h1>
      {props.users.map((user, index) => {
        return (
          <div key={`${user.name}-${index}`}>
            <h1>Name:{user.name}</h1>
            <h1>Phone Number:{user.email}</h1>
            <h1>Location:{user.gen}</h1>
          </div>
        );
      })}
    </div>
  );
};


const sendDataAsProps = (state) => {
  return { state: state, users: state.users, students: state.students };
};



export default connect(sendDataAsProps)(UserList);
