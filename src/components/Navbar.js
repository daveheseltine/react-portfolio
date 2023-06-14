import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
const imgCV = require("../assets/img/CV-Preview.png");


function Navbar () {
  const [dropdown, setDropdown] = useState(false);

  const [modal, setModal] = useState({
    show: false
  });

  const handleModal = () => {
    setModal({
      show: true
    })
  }


  return(
    <div>
      <Modal show={modal.show} size="xl" onHide={() => setModal({show: false})} centered>
        <div className="d-flex flex-wrap justify-content-center p-1" fullscreen="true">
          <h1 className="col-12 pt-2 pb-1 display-6 text-center">David Heseltine CV.pdf</h1>
          <img src={imgCV} alt="Preview of CV" width="100%"/>
          <a className="interaction color-grey bi-arrow-down-square-fill shadow-none" alt="Download" style={{fontSize: "40px"}} href={"Downloads/David Heseltine CV.pdf"} download> </a>
        </div>
      </Modal>

      <nav className="navbar navbar-expand-md fixed-top navbar-dark py-0 px-4">
        <div className="col-xl-10 col-12 container-fluid p-0" style={{minHeight: "100px"}} >
          <Link className="navbar-brand d-flex"
            to=""
            onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
          >
            <h1 className="brand my-auto">David Heseltine</h1>
          </Link>

          {/* Menu Icon: */}
          <i className="navbar-toggler p-0" alt="Menu" onClick={() => setDropdown(!dropdown)} style={{border: "none", minHeight: "100px"}}>
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100px", minWidth: "50px"}}>
              <i className={`${dropdown ? "bi-eye-slash-fill" : "navbar-toggler-icon"}`} style={{fontSize: "30px"}}></i>
            </div>
          </i>

          {/* Dropdown Menu: */}
          <div className={`collapse navbar-collapse justify-content-end ${dropdown ? "show" : "hide"}`} >
            <ul className="navbar-nav">
              <li className="nav-item my-auto ms-3 pt-0 pb-1">
                <NavLink 
                  to=""
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
                >Home</NavLink>
              </li>

              <li className="nav-item my-auto ms-3 pt-0 pb-1" >
                <NavLink 
                  to="/Projects"
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
                >Projects</NavLink>
              </li>

              <li className="nav-item my-auto ms-3 pt-0 pb-1" >
                <p className="nav-link interaction m-0" onClick={() => handleModal()}>CV</p>
              </li>

              {/* Spacer: */}
              <div className="mb-3"></div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;