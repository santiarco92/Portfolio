import React from "react";
import Logo from "../img/SA-White-bg.jpg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top css-selector">
      <div className="container-fluid">
        <img className="logo" src={Logo} alt="Logo" loading="lazy"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#Education">Education</a>
            <a className="nav-link" href="#Projects">Projects</a>
            <a className="nav-link" href="#Devprojects">Dev Projects</a>
            <a className="nav-link" href="#Experience">Experience</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
