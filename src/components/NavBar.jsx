import React from "react";

function NavBar () {

    return <nav class="navbar navbar-expand-lg fixed-top css-selector" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img className="logo" src="/IMG/SA-White-bg.jpg" alt="Logo" /> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Skills</a>
          <a class="nav-link" href="#">Education</a>
          <a class="nav-link" href="#">Projects</a>
          <a class="nav-link" href="#">Experience</a>
        </div>
      </div>
    </div>
  </nav>
}

export default NavBar;