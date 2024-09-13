import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Tooltip from '@mui/material/Tooltip';  // Importa el componente Tooltip

function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer>
        <div className="footer-container">
          <p>Copyright ⓒ {year}</p>
          <div className="socials">
          <Tooltip title="Go To GitHub" arrow>
              <a href="https://github.com/santiarco92" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: '#b29e84' }} />
              </a>
            </Tooltip>
            <Tooltip title="Go To Linkedin" arrow>
              <a href="https://www.linkedin.com/in/santiago-arroyave-correa-14a5b4231/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: '#b29e84' }} />
              </a>
            </Tooltip>
            <Tooltip title="Click to Go To CV" arrow>
                <a href="https://drive.google.com/file/d/1XvGK6MkeBiVC2uVMIHDMUppqjXxJbrmX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <SwitchAccountIcon sx={{ color: '#b29e84' }} />
                </a>
            </Tooltip>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
