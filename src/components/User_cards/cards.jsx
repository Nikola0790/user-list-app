import React from "react";
import "./cards.css";

const UserCards = ({ person }) => {
  let date = new Date(person.date);

  return (
    <div className="card col-sm-4 style">
      <img className="card-img" src={person.pictureCard} alt="..." />
      <div className="card-img-overlay">
        <p className="card-text">{person.name}</p>
      </div>
      <div className="text-style">
        <p className="card-text">email: {person.email}</p>
        <p className="card-text">
          date of birth: {date.getDate()}
          {"-"}
          {date.getMonth()}
          {"-"}
          {date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default UserCards;
