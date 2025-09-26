import React from "react";
import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">LAPTOP MODELS BLOG</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;