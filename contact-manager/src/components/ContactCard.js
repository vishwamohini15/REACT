import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { sno, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${sno}`} state={{ contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "-9px",
        }}
      >
        <i
          className="trash alternate outline icon"
          style={{ color: "red", fontSize: "22px" }}
          onClick={() => clickHandler(sno)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
