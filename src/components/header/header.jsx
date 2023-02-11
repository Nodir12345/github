import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import Ring from "../../img/Vector.png";
import plus from "../../img/plus.png";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import LongMenu from "../more/more";
import { MenuItem } from "@mui/material";
export const Header = () => {

  const [line, setline] = React.useState("1");
  const [fixed, setFixed] = React.useState(false);
  const [fixed2, setFixed2] = React.useState(false);



  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setFixed2(true);
      } else {
        setFixed2(false);
      }
    });
  });

  return (
    <div className="header_wrap">
      <div className="header">
        <div className="hed">
          <img className="logo" src={Logo} alt="rge" />
          <form>
            <input type="text" placeholder="Search or jump to..." />
          </form>
          <ul>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Codespaces</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </div>
        <div>

        <div className="imgs">
          <Link className="btnlink" to="https://github.com/notifications">
            <img className="ring" src={Ring} alt="ring" />
            <div className="ring_s"></div>
          </Link>
          <div>
            <button>
              <img className="plus" src={plus} alt="ring" />
              <LongMenu>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/new"
                    className="select"
                  >
                    New repository
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/new/import"
                    className="select"
                  >
                    Import Repository
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/codespaces/new"
                    className="select"
                  >
                    New codespace
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://gist.github.com/"
                    className="select"
                  >
                      New organization
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/organizations/plan"
                    className="select"
                  >
                    New gists
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem
                  style={{ color: "#fff", fontSize: "12px", with: "700px" }}
                >
                  <Link
                    to="https://github.com/users/Nodir12345/projects/3"
                    className="select"
                  >
                     New Projects
                  </Link>
                </MenuItem>
              </LongMenu>{" "}
            </button>
          </div>
          <div className="imgs2">
            <button>
              <img
                className="img_box"
                src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg"
                alt="Remy Sharp"
              />
              <div className="ring_i"></div>
              <LongMenu>
                <MenuItem
                  style={{ color: "#A6AEB6", fontSize: "13px", fontWeight: "400" }}
                >
                  sigined in as
                </MenuItem>

                <MenuItem
                  style={{ color: "#A6AEB6", fontSize: "20px", fontWeight: "600" }}
                >
                  Nodir12345
                </MenuItem>
                <hr />
                <input
                  type="text"
                  className="inputtext"
                  placeholder="😆 set profile"
                />
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                  <Link className="ypo" to="/">
                  Your profile
                  </Link>
                 
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
               
                 
                  <Link className="ypo" to="/repository">
                  Your repository
                  </Link>
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="projects">
                Your project
                  </Link>
                  
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="/packages">
                Your overweiw
                  </Link>
                 
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
               
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/sponsors/accounts">
                Your sponsors
                  </Link>
               
                </MenuItem>
                <hr />
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/settings/billing/plans">
                Upgrage
                  </Link>
            
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/sponsors/accounts">
                Try Enterprise
                  </Link>
                
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/settings/profile">
                Feature oriew
                  </Link>
                
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://docs.github.com/en">
                Help
                  </Link>
              
                </MenuItem>
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/settings/profile">
                Settings
                  </Link>
                 
                </MenuItem>
                <hr />
                <MenuItem style={{ color: "#fff", fontSize: "14px" }}>
                <Link className="ypo" to="https://github.com/">
                Sign out
                  </Link>
                 
                </MenuItem>
              </LongMenu>
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className={`wrap ${fixed ? "fixed" : ""}`}>
        <div></div>
        <div className="btn_focus">
          <div className={`none ${fixed2 ? "block9" : ""}`}>
            <img
              className="img_box"
              src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg"
              alt="Remy Sharp"
            />

            <p>Nodir1234</p>
          </div>
          <Link to="/" className="fox">
            <button className="btn" onClick={() => setline("1")}>
              <img src={logo1} alt="logo" />
              Overview
            </button>
            {line === "1" ? <div className="div"></div> : ""}
          </Link>

          <Link to="/repository" className="fox">
            <button className="btn" onClick={() => setline("2")}>
              <img src={logo2} alt="logo" />

              Repositories <div className="repo55">56</div>
            </button>
            {line === "2" ? <div className="div"></div> : ""}
          </Link>

          <Link to="projects" className="fox">
            <button className="btn" onClick={() => setline("3")}>
              <img src={logo3} alt="logo" />
              Projects
            </button>
            {line === "3" ? <div className="div"></div> : ""}
          </Link>
          <Link to="packages" className="fox">
            <button className="btn" onClick={() => setline("5")}>
              <img src={logo4} alt="logo" />
              Packages
            </button>
            {line === "5" ? <div className="div"></div> : ""}
          </Link>
          <Link to="stars" className="fox" onClick={() => setline("4")}>
            <button className="btn">
              <img src={logo5} alt="logo" />
              Stars
            </button>
            {line === "4" ? <div className="div"></div> : ""}
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};
