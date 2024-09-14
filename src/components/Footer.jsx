import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Tooltip from '@mui/material/Tooltip'; 

function Footer() {
    const year = new Date().getFullYear(); // Get the current year

    return (
      <footer> {/* The footer element for semantic purposes */}
        <div className="footer-container"> {/* Container div for styling the footer */}
          <p>Copyright ⓒ {year}</p> {/* Display the copyright text with the current year */}
          <div className="socials"> {/* Container div for social media icons */}
            <Tooltip title="Go To GitHub" arrow> {/* Tooltip for GitHub icon */}
              <a href="https://github.com/santiarco92" target="_blank" rel="noopener noreferrer"> {/* Link to GitHub profile, opens in a new tab */}
                <GitHubIcon sx={{ color: '#b29e84' }} /> {/* GitHub icon with custom color */}
              </a>
            </Tooltip>
            <Tooltip title="Go To LinkedIn" arrow> {/* Tooltip for LinkedIn icon */}
              <a href="https://www.linkedin.com/in/santiago-arroyave-correa-14a5b4231/" target="_blank" rel="noopener noreferrer"> {/* Link to LinkedIn profile, opens in a new tab */}
                <LinkedInIcon sx={{ color: '#b29e84' }} /> {/* LinkedIn icon with custom color */}
              </a>
            </Tooltip>
            <Tooltip title="Click to Go To CV" arrow> {/* Tooltip for CV icon */}
                <a href="https://drive.google.com/file/d/1XvGK6MkeBiVC2uVMIHDMUppqjXxJbrmX/view?usp=sharing" target="_blank" rel="noopener noreferrer"> {/* Link to CV, opens in a new tab */}
                  <SwitchAccountIcon sx={{ color: '#b29e84' }} /> {/* CV icon with custom color */}
                </a>
            </Tooltip>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
