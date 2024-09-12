import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';


function Footer() {
    const year = new Date().getFullYear();

    return <footer>
        <div className="footer-container">
            <p>Copyright ⓒ {year}</p>
    <div className="socials">
      <a href="https://github.com/santiarco92" target="_blank" rel="noopener noreferrer">
      <GitHubIcon sx={{ color: '#b29e84' }}/>
      </a>
      <a href="https://www.linkedin.com/in/santiago-arroyave-correa-14a5b4231/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon sx={{ color: '#b29e84' }}/>
      </a>
      <a href="https://drive.google.com/drive/folders/1QC11Cs5WtyIutE54u-3XzpMEanTad1f4" target="_blank" rel="noopener noreferrer">
       <SwitchAccountIcon sx={{ color: '#b29e84' }}/>
      </a>
    </div>
        </div>
    
  </footer>
}

export default Footer;