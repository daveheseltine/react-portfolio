import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';


function Navbar () {
  const [dropdown, setDropdown] = useState(false);

  return(
    <nav className="navbar navbar-expand-md fixed-top navbar-dark py-0 px-5">

      <div className="col-xl-10 col-12 container-fluid p-0" style={{minHeight: "100px"}} >
        <Link className="navbar-brand d-flex"
          to=""
          onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
        >
          <h1 className="my-auto">David Heseltine</h1>
        </Link>

        <i className="navbar-toggler p-0" alt="Menu" onClick={() => setDropdown(!dropdown)} style={{border: "none", minHeight: "100px"}}>
          <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100px", minWidth: "50px"}}>
            <i className={`${dropdown ? "bi-eye-slash-fill" : "navbar-toggler-icon"}`} style={{fontSize: "30px"}}></i>
          </div>
        </i>

        <div className={`collapse navbar-collapse justify-content-end ${dropdown ? "show" : "hide"}`} >
          <ul className="navbar-nav">
            <li className="nav-item my-auto">
              <NavLink 
                to=""
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Home</NavLink>
            </li>

            <li className="nav-item my-auto" >
              <NavLink 
                to="/Projects"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Projects</NavLink>
            </li>

            <li className="nav-item my-auto" >
              <NavLink 
                to="/CV"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >CV</NavLink>
            </li>

            {/* Spacer: */}
            <div className="mb-3"></div>
          </ul>
        </div>
      </div>
    </nav>  
  );
}


export default Navbar;