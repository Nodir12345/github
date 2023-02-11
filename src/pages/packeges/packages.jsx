import React from "react";
import "./packages.scss";
import img from "../../img/photo1.jpg";
import pro1 from "../../img/pro1.jpg";
import pro2 from "../../img/pro2.jpg";
import pro3 from "../../img/pro3.jpg";
import pro4 from "../../img/pro4.jpg";
import pro5 from "../../img/pro5.jpg";
import pro6 from "../../img/pro6.jpg";
import { Contact } from "../../components/contact/contact.jsx";
export const Packages = () => {
  return (
    <div className="container package">
      <Contact></Contact>
      <div className="package_box">
        <img src={img} alt="img" />
        <p className="package_title">Get started with GitHub Packages</p>
        <p className="package_text">
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </p>

        <p className="choose">Choose a registry</p>
        <ul className="ul_wrapper">
          <li className="pack_li">
            <div className="df">
            <img src={pro1} alt="img" />  <h3> Docker</h3>
            </div>
            <p className="pro_textq">
       
              A software platform used for building applications based on
              containers — small and lightweight execution environments.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
          <li className="pack_li">
            <div className="df">
            <img src={pro2} alt="img" />  <h3> Apache Maven</h3>
            </div>
            <p className="pro_textq">
            A default package manager used for the Java programming language and the Java runtime environment.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
          <li className="pack_li">
            <div className="df">
            <img src={pro3} alt="img" />  <h3> NuGet</h3>
            </div>
            <p className="pro_textq">
            A free and open source package manager used for the Microsoft development platforms including .NET.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
          <li className="pack_li">
            <div className="df">
            <img src={pro4} alt="img" />  <h3> RubyGems</h3>
            </div>
            <p className="pro_textq">
       
            A standard format for distributing Ruby programs and libraries used for the Ruby programming language.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
          <li className="pack_li">
            <div className="df">
            <img src={pro5} alt="img" />  <h3>npm</h3>
            </div>
            <p className="pro_textq">
       
            A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
          <li className="pack_li">
            <div className="df">
            <img src={pro6} alt="img" />  <h3>  Containers</h3>
            </div>
            <p className="pro_textq">
       
            A single place for your team to manage Docker images and decide who can see and access your images.
            </p>
            <button className="proo_btn"> learn more</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
