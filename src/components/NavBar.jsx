import React from "react";
import Logo from "../img/SA-White-bg.jpg";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top css-selector"> {/* Nav element with Bootstrap classes for a responsive, fixed-top navbar */}
      <div className="container-fluid"> {/* Container div for proper alignment and spacing */}
        <img className="logo" src={Logo} alt="Logo" loading="lazy"/> {/* Logo image with lazy loading for performance */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> {/* Button to toggle the navbar on small screens */}
          <MenuIcon 
            className="navbar-toggler-icon"
            sx={{ color: '#b29e84' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> {/* Container for collapsible navbar items */}
          <div className="navbar-nav"> {/* Container for navbar links */}
            <a className="nav-link" href="#Education">Education</a> {/* Link to Education section */}
            <a className="nav-link" href="#Projects">Projects</a> {/* Link to Projects section */}
            <a className="nav-link" href="#Devprojects">Dev-Projects</a> {/* Link to Dev Projects section */}
            <a className="nav-link" href="#Experience">Experience</a> {/* Link to Experience section */}
            <a className="nav-link" href="#Socials">Socials</a> {/* Link to Socials section */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
