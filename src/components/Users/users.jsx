import React from "react";
import { useState, useEffect } from "react";
import UserCards from "../User_cards/cards";
import UserList from "../User_list/list";
//import { data } from "../../data/RandomUsers";
import "./users.css";
import { getUsers } from "../../services/userService";

const Users = () => {
  const [selected, setSelected] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchBox, setSearchBox] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setSearchBox(users);
    });
  }, []);

  const refresh = () => {
    getUsers().then((users) => {
      setUsers(users);
    });
  };

  const onSelec = () => {
    setSelected(!selected);
  };

  const cName = selected ? true : false;

  const filterData = (event) => {
    let filtered = [];
    if (event.target.value) {
      filtered = searchBox.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    } else {
      filtered = searchBox;
    }
    setUsers(filtered);
  };

  /*   if (users.length === 0)
    return (
      <div className="example">
        <div className="sk-grid">
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
        </div>
      </div>
    ); */

  return (
    <div className="row wid">
      <div className="row bt">
        <div className="col-12 switch">
          <div className="searchBox">
            <input type="text" placeholder="Search" onChange={filterData} />
          </div>
          <button type="button" onClick={onSelec}>
            SWITCH
          </button>
          <button className="refresh" type="button" onClick={refresh}>
            REFRESH
          </button>
        </div>
      </div>
      {users.map((person, index) => {
        let changer = cName;
        if (changer) {
          return <UserList person={person} key={index} />;
        } else {
          return <UserCards person={person} key={index} />;
        }
      })}
    </div>
  );
};

export default Users;
