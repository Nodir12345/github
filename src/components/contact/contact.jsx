import React from "react";
import people from "../../img/people.png";
import "./contact.scss"
import { Link } from "react-router-dom";
import axios from "axios";
export const Contact = () => {
  const [value, setvalue] = React.useState([]);
  React.useEffect(() => {
    axios("https://api.github.com/users/nodir12345").then((res) =>
      setvalue(res.data)
    );
  }, []);
  return (
    <div className="contact">
      <img src={value.avatar_url}alt="avatar" />
      <p>{value.login}</p>
      <button className="edit">Edit profile</button>
      <div className="contact_box">
        <img src={people} alt="people" />
        <div className="aaa">
          <Link to="/followers" className="follow1">{value.followers}</Link>
          <Link to="/followers" className="follow2">followers</Link>
        </div>
        <p>.</p>
        <div>
          <Link to="/following" className="follow1">{value.following}</Link>
          <Link to="/following" className="follow2">following</Link>
        </div>
      </div>
    </div>
  );
};
