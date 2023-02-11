import React from "react";
import "./footer.scss";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="container footer">
      <hr />
      <div className="footer_wrap">
      <div className="footer_logoss">
      <img src={Logo} alt="logo" />
      <p>© 2022 GitHub, Inc.</p>
      </div>
      <div className="footer_link_box">
        <Link className="footer_link">Terms</Link>
        <Link className="footer_link">Privacy</Link>
        <Link className="footer_link">Security</Link>
        <Link className="footer_link">Status</Link>
        <Link className="footer_link">Docs</Link>
        <Link className="footer_link">Contact GitHub</Link>
        <Link className="footer_link">Pricing</Link>
        <Link className="footer_link">API</Link>
        <Link className="footer_link">Training</Link>
        <Link className="footer_link">Blog</Link>
        <Link className="footer_link">About</Link>
      </div>
      </div>
    </div>
  );
};
