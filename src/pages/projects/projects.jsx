import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo3.png";
import { Contact } from "../../components/contact/contact.jsx";
import LongMenu from "../../components/more/more";
import "./projects.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Menu, MenuItem } from "@mui/material";
export const Projects = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container project_wrap">
      <Contact></Contact>
      <div>
        <div className="project">
          <input
            className="projects_input"
            type="text"
            placeholder="search all projects"
          />
          <button className="proNew">New projects</button>
        </div>
        <ul className="pro_contex">
          <li className="pro_text">
            <div className="openclose">
              <Link to="/projects" className="open5">
                <img src={logo} alt="logo" />5 open
              </Link>
              <Link to="/projects" className="open5">
                <img src={logo} alt="logo" />0 close
              </Link>
            </div>
            <div className="btnrepo">
              Sort
              <LongMenu>
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
          </li>
          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#5 updated 1 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>

          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#4 updated 12 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>
          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#3 updated 6 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>
          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#2 updated 4 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>
          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#1 updated 12 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>
          <li className="pro_text1">
            <div>
              <div className="openclose1">
                <Link to="https://github.com/users/Nodir12345/projects/5" className="textname">
                  <img src={logo} alt="logo" /> @Nodir12345's untitled project
                </Link>
                <p className="private">private</p>
              </div>
              <div className="hour">
                <p>#5 updated 1 hour ago</p>
              </div>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Make a copy </MenuItem>
                <MenuItem onClick={handleClose}>Close project</MenuItem>
              </Menu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
