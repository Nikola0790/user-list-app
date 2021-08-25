import React from "react";
import "./list.css";

const UserList = ({ person }) => {
  let date = new Date(person.date);
  return (
    <div className="row userList">
      <div className="col-md-1 userImg">
        <img
          src={person.pictureList}
          className="img-fluid rounded-start"
          alt="profile"
        />
      </div>
      <div className="col-md-11">
        <div className="card-body">
          <p className="card-text">name: {person.name}</p>
          <p className="card-text">email: {person.email}</p>
          <p className="card-text">
            date of bith: {date.getDate()}
            {"-"}
            {date.getMonth()}
            {"-"}
            {date.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
