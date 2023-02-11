import React from "react";
import { Contact } from "../../components/contact/contact.jsx";
import "./home.scss";
import axios from "axios";
import img from "../../img/photo.jpg";
import img2 from "../../img/img3.jpg";
import change1 from "../../img/change1.jpg";
import change2 from "../../img/change2.jpg";
import book from "../../img/books.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export const Home = () => {
  const [state, setstate] = React.useState([]);
  const [change, setchange] = React.useState(true);
  React.useEffect(() => {
    axios("https://api.github.com/users/nodir12345/repos").then((res) =>
      setstate(res.data > 4 ? res.data : res.data.splice(0, 6))
    );
  }, []);

  return (
    <div className="container box1">
      <button></button>
      <div className="scroll">
        <Contact></Contact>
      </div>
      <div className="home_box">
        <div className="git">
          <div className="git_content">
            <p>Nodir12345/README.md</p>
            <IconButton aria-label="delete">
              <ModeEditOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </div>
          <p>
            <a href="https://git.io/typing-svg">
              <img className="marimg"
                src="https://readme-typing-svg.herokuapp.com?font=Consolas&pause=1000&width=435&lines=Hey+there!;I'm+a+Frontend+Developer;I'm+a+JavaScript+Developer;I'm+a+React+JS+Developer"
                alt="Typing SVG"
              />
            </a>
          </p>

          <p className="fun">
            {" "}
            - 🌱 I’m currently learning everything about web development{" "}
          </p>
          <p className="fun"> - ⚡️ Fun fact: I love sports and play guitar </p>
          <p className="fun1">
            {" "}
            - 🥅 2023 Goals: Learn more about <b>ReactJS</b> , <b>NextJs</b> and{" "}
            <b>JavaScript</b>{" "}
          </p>
        </div>
        <div>
          <div className="home_title">
            <p className="your">Pined</p>
            <Link to="https://github.com/Nodir12345" className="your2">
              customize your pins
            </Link>
          </div>
          <div className="home_contex">
            <ul>
              {state.map((el) => (
                <li key={el.id}>
                  <div>
                    <img src={book} alt="img" />
                    <Link className="link" to={el.clone_url}>
                      {el.name}
                    </Link>

                    <button className="public">public</button>
                  </div>

                  <div className="ddd">
                    <div className={el.language}></div>
                    {el.language}
                  </div>
                </li>
              ))}
            </ul>
            <div className="end_home">
              <p className="text_home">149 contributions in the last year</p>
              <p className="setting">countrabution settings</p>
            </div>
            <img className="endimg" src={change ? img : change1} alt="img" />
            <div className="contex2">
              <div className="contex">
                <p className="count">Contribution activity</p>
                <img className="img2" src={change ? img2 : change2} alt="img" />
                <button className="show_btn">Show more activity</button>
              </div>
              <div className="btns">
                <button onClick={() => setchange(false)} className="year">
                  2023
                </button>
                <button onClick={() => setchange(true)} className="year">
                  2022
                </button>
              </div>
            </div>
            <div className="linkend">
              Seeing something unexpected? Take a look at the{" "}
              <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile">
                GitHub profile guide.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
