import React from "react";

export default function Card({ name, username, email }) {
  return (
    <div className="ui raised card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">
          <span className="category">{email}</span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">
          <img className="ui avatar image" src="https://picsum.photos/" />
          {username}
        </div>
      </div>
    </div>
  );
}
