import { Button, Checkbox, IconButton, MenuItem } from "@mui/material";
import React from "react";
import { Contact } from "../../components/contact/contact.jsx";
import "./repository.scss";
import LongMenu from "../../components/more/more";
import book from "../../img/books.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";
import { Add } from "@mui/icons-material";

export const Repository = () => {
  let [state, setstate] = React.useState([]);
  const [next, setnext] = React.useState([]);
  const [api, setapi] = React.useState(true);
  React.useEffect(() => {
    axios("https://api.github.com/users/nodir12345/repos").then((res) =>
      setstate(res.data > 1 ? res.data : res.data.splice(0, 10))
    );
  }, [api]);
  React.useEffect(() => {
    axios("https://api.github.com/users/nodir12345/repos").then((res) =>
      setnext(res.data > 5 ? res.data : res.data.splice(10, 30))
    );
  }, []);
  return (
    <div className="container repo">
      <Contact></Contact>
      <div className="boxrepo">
        <div className="repo1">
          <input
            className="repoinput"
            type="text"
            placeholder="find a repository..."
          />

          <div className="btnbox">
            <div className="btnrepo">
              Type
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
              Language
              <LongMenu>
                <MenuItem style={{ color: "#fff", fontSize: "12px" }}>
                  <div className="selectx">
                    <p>select language</p>
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
                    HTML
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
                    Javascript
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
                    CSS
                  </Link>
                </MenuItem>
              </LongMenu>{" "}
            </div>
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
            <Link to="https://github.com/new" className="New">
              <img src={book} alt="book" />
              New
            </Link>
          </div>
        </div>
        <div>
          {api === true ? (
            <div>
              {state.map((el) => (
                <div key={el.id}>
                  <hr />
                  <div className="inner">
                    <div className="publicrepo">
                      <div className="repoText">
                        <Link className="repolink" to={el.clone_url}>
                          {el.name}
                        </Link>
                        <button>public</button>
                      </div>
                      <button className="chek">
                        <Checkbox
                          icon={
                            <div className="ggg">
                              <StarBorderIcon />
                              <p>star</p>
                            </div>
                          }
                          checkedIcon={
                            <div className="ggg">
                              <StarRateIcon />
                              <p>starred</p>
                            </div>
                          }
                        />
                        <LongMenu>
                          <MenuItem style={{ color: "#fff", fontSize: "12px" }}>
                            <div className="selectx">
                              <p>Lists</p>
                              <IconButton size="small" aria-label="delete">
                                <ClearIcon />
                              </IconButton>
                            </div>
                          </MenuItem>
                          <hr />

                          <MenuItem
                            style={{
                              color: "#fff",
                              fontSize: "12px",
                              with: "700px",
                            }}
                          >
                            <Link
                              to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                              className="select"
                            >
                              <Checkbox /> ✈️ Last update
                            </Link>
                          </MenuItem>

                          <hr />
                          <MenuItem
                            style={{
                              color: "#fff",
                              fontSize: "12px",
                              with: "700px",
                            }}
                          >
                            <Link
                              to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                              className="select"
                            >
                              <Checkbox /> 🍄 Future ides
                            </Link>
                          </MenuItem>
                          <hr />
                          <MenuItem
                            style={{
                              color: "#fff",
                              fontSize: "12px",
                              with: "700px",
                            }}
                          >
                            <Link
                              to="https://github.com/Nodir12345?tab=repositories&q=&type=&language=&sort="
                              className="select1"
                            >
                              <Add /> Create List
                            </Link>
                          </MenuItem>
                        </LongMenu>{" "}
                      </button>
                    </div>
                    <div className="inner2">
                      <div className="inner2_text">
                        <div className="in">
                          <div className={el.language}></div>
                          {el.language}
                        </div>
                        <p className="inner2_lan">updated {el.updated_at}</p>
                      </div>
                      <div className="inner_line"></div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <>
              <p>salom</p>
              {(state = [])}
              <div>
                {next.map((el) => (
                  <div key={el.id}>
                    <hr />
                    <div className="inner">
                      <div className="publicrepo">
                        <div className="repoText">
                          <Link className="repolink" to={el.clone_url}>
                            {el.name}
                          </Link>
                          <button>public</button>
                        </div>
                        <button className="chek">
                          <Checkbox
                            icon={
                              <div className="ggg">
                                <StarBorderIcon />
                                <p>start</p>
                              </div>
                            }
                            checkedIcon={
                              <div className="ggg">
                                <StarRateIcon />
                                <p>started</p>
                              </div>
                            }
                          />
                          <LongMenu>
                            <MenuItem style={{ color: "#000" }}>
                              Import Repository
                            </MenuItem>
                            <MenuItem style={{ color: "#000" }}>
                              New codespace
                            </MenuItem>
                            <MenuItem style={{ color: "#000" }}>
                              New organization
                            </MenuItem>
                            <MenuItem style={{ color: "#000" }}>
                              New gists
                            </MenuItem>
                          </LongMenu>{" "}
                        </button>
                      </div>
                      <div className="inner2">
                        <div className="inner2_text">
                          <div className="in">
                            <div className={el.language}></div>
                            {el.language}
                          </div>
                          <p className="inner2_lan">updated {el.updated_at}</p>
                        </div>
                        <div className="inner_line"></div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {state.map((el) => (
            <div key={el.id}>
              <hr />
              <div className="inner">
                <div className="publicrepo">
                  <div className="repoText">
                    <Link className="repolink" to={el.clone_url}>
                      {el.name}
                    </Link>
                    <button>public</button>
                  </div>
                  <button className="chek">
                    <Checkbox
                      icon={
                        <div className="ggg">
                          <StarBorderIcon />
                          <p>start</p>
                        </div>
                      }
                      checkedIcon={
                        <div className="ggg">
                          <StarRateIcon />
                          <p>started</p>
                        </div>
                      }
                    />
                    <LongMenu>
                      <MenuItem style={{ color: "#000" }}>
                        Import Repository
                      </MenuItem>
                      <MenuItem style={{ color: "#000" }}>
                        New codespace
                      </MenuItem>
                      <MenuItem style={{ color: "#000" }}>
                        New organization
                      </MenuItem>
                      <MenuItem style={{ color: "#000" }}>New gists</MenuItem>
                    </LongMenu>{" "}
                  </button>
                </div>
                <div className="inner2">
                  <div className="inner2_text">
                    <div className="in">
                      <div className={el.language}></div>
                      {el.language}
                    </div>
                    <p className="inner2_lan">updated {el.updated_at}</p>
                  </div>
                  <div className="inner_line"></div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="btnss">
          <Button variant="outlined" onClick={() => setapi(true)}>
            previos
          </Button>
          <Button variant="outlined" onClick={() => setapi(false)}>
            next
          </Button>
        </div>
      </div>
    </div>
  );
};
