import React, { useState } from "react";
import SidePanel from "./SidePanel";

function NavBar() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.imgur.com/EswKOEZ.png"
              className="logo"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidePanel}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto .navbar-nav-scroll">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="music">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="artists">
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="posts">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="friends">
                  Friends
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={toggleSidePanel}>
                  About
                </button>
              </li>
              <li className="nav-item" style={{ marginLeft: "650px" }}>
                <a className="nav-link" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isSidePanelOpen && <SidePanel onClose={toggleSidePanel} />}
    </div>
  );
}

export default NavBar;
