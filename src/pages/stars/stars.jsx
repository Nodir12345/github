import { IconButton, MenuItem } from "@mui/material";
import React from "react";
import { Contact } from "../../components/contact/contact.jsx";
import LongMenu from "../../components/more/more";
import ClearIcon from "@mui/icons-material/Clear";
import logo from "../../img/logo5.png"
import { Link } from "react-router-dom";
import "./star.scss";
export const Stars = () => {
  return (
    <div className="container star1_box">
      <Contact></Contact>
      <div>
        <div className="star1">
          <p className="startIn">Lists (2)</p>
          <div className="star1_title">
            <div className="btnrepo">
              Sort
              <LongMenu>
                <MenuItem style={{ color: "#fff", fontSize: "12px" }}>
                  <div className="selectx">
                    <p>select order</p>
                    <IconButton size="small" aria-label="delete">
                      <ClearIcon />
                    </IconButton>
                  </div>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Last update
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Name
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Star
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                ></MenuItem>
              </LongMenu>{" "}
            </div>
            <button className="proNew">Create list</button>
          </div>
        </div>
        <ul className="star_f">
          <li>✈️ My stack</li>
          <li>🍄 Future ides</li>
        </ul>
        <div className="simple">
          <div className="beta">Beta</div>
          <p>
            Lists are currently in beta. <Link to="https://github.com/community/community/discussions/categories/lists" className="beta_link">Share feedback and report bugs.</Link>
          </p>
        </div>
        <p className="startIn">Stars</p>
        <div className="repo2">
          <input
            className="repoinput"
            type="text"
            placeholder="Search status"
          />

          <div className="btnbox">
            <div className="btnrepo">
              Type:All
              <LongMenu>
                <MenuItem style={{ color: "#fff", fontSize: "12px" }}>
                  <div className="selectx">
                    <p>select</p>
                    <IconButton size="small" aria-label="delete">
                      <ClearIcon />
                    </IconButton>
                  </div>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    All
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Public
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Previte
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Source
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Forks
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Achived
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Mirors
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Templates
                  </Link>
                </MenuItem>
              </LongMenu>{" "}
            </div>







            <div className="btnrepo">
              Sort by 
              <LongMenu>
                <MenuItem style={{ color: "#fff", fontSize: "12px" }}>
                  <div className="selectx">
                    <p>select order</p>
                    <IconButton size="small" aria-label="delete">
                      <ClearIcon />
                    </IconButton>
                  </div>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Last update
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Name
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                    className="select"
                  >
                    Star
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                ></MenuItem>
              </LongMenu>
            </div>
        
          </div>
        </div>

        <div className="box_logo5">
          <img className="yetimg" src={logo} alt="logo" />
          <p className="yet">You don’t have any starred repositories yet.</p>
          <p className="yet2">As you <Link className="yetLink" to="https://github.com/explore">explore GitHub,</Link> star repositories to save them for later and they’ll show up here.</p>
        </div>
      </div>
    </div>
  );
};
