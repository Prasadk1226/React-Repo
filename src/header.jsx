import React from "react";
import "./style.css"
import faviconn from "./assets/images/favicon.jpg"

function header(){
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#i" style={{fontSize:"30px"}}>
          <img
            style={{borderRadius:"50px"}}
            src={faviconn}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          Kancheti Prasad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul
            className="nav justify-content-end home-items">
            <li className="nav-item van">
              <a className="nav-link active" aria-current="page" href="#aboutme"
                >About Me</a
              >
            </li>
            <li className="nav-item van">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item van">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item van">
              <a className="nav-link" href="#contact"> Contact</a>
            </li>
            <li className="nav-item van">
              <a className="nav-link" href="#i">
                <div className="fixed-img" title="Move to top">
                  <i className="fa-solid fa-jet-fighter-up"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    )
}
export default header;