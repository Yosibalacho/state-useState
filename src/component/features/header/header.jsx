import "./header.css";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const pages = ["HomePage", "Gallery", "Videos","ClickMe"];
function Header() {
  return (
    <BrowserRouter>
    <div className="header">
 {pages.map((pagePath) => (
         <Link to={pagePath}><button>{pagePath}</button></Link>
        ))}    </div>
        </BrowserRouter>
  );
};

export default Header;
