import React from "react";
import { Contact } from "../../components/contact/contact";
import axios from "axios";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
export const Following = () => {
  const [state, setstate] = React.useState([]);
  React.useEffect(() => {
    axios("https://api.github.com/users/Nodir12345/following").then((res) =>
      setstate(res.data)
    );
  }, []);

  return (
    <div className="container foll">
      <Contact></Contact>
      <div>
        {state.map((el) => (
          <div>
            <div className="followers_box">
              <div className="followers">
                <Link to={el.html_url}>
                  <img className="fimg" src={el.avatar_url} alt="aa" />
                </Link>

                <Link to={el.html_url} className="elfLogin">
                  {el.login}
                </Link>
              </div>

              <Checkbox
                icon={<p className="btnf">Unfollow</p>}
                checkedIcon={<p className="btnf">follow</p>}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
