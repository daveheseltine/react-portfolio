import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';


function Header () {
  const [dropdown, setDropdown] = useState(false);

  return(
    <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0">

      <div className="col-xl-9 col-12 container-fluid px-3" style={{minHeight: "85px"}} >
        <Link className="navbar-brand d-flex"
          to=""
          onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
        >
          <h1 className="my-auto">Dave's React Template</h1>
        </Link>

        <i className="navbar-toggler d-flex p-0" alt="Menu" onClick={() => setDropdown(!dropdown)} style={{border: "none", minHeight: "85px"}}>
          <div className="d-flex justify-content-center align-items-center" style={{minHeight: "85px", minWidth: "50px"}}>
            <i className={`${dropdown ? "bi-eye-slash-fill" : "navbar-toggler-icon"}`} style={{fontSize: "30px"}}></i>
          </div>
        </i>

        <div className={`collapse navbar-collapse justify-content-end ${dropdown ? "show" : ""}`} >
          <ul className="navbar-nav">
            <li className="nav-item my-auto">
              <NavLink 
                to=""
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Home</NavLink>
            </li>

            {/* Spacer: */}
            <div className="mb-2"></div>
          </ul>
        </div>
      </div>
    </nav>  
  );
}


export default Header;