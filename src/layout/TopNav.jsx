import React, { useState } from "react";


// Router
import { Link, useHistory } from "react-router-dom";

// MDBREACT
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  /* Evalua si el path de la url actual es el mismo
  que el string que se pasa como argumento */
  const isCurrentUrl = (pathNameToCheck) => {
    const { pathname } = history.location;
    const currentPathName = pathname.split("/")[1];
    return currentPathName === pathNameToCheck;
  };

  // Cambia el valor de toggle para abrir el menú de perfil de usuario en el nav
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar
      color="blue accent-5"
      dark
      expand="md"
      className="top-nav mb-4 sticky-top"
      scrolling
    >
      <MDBNavbarBrand>
        <strong className="white-text d-lg-none d-xl-none pl-2">CRUD</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left className="d-lg-none d-xl-none">         
         
            <MDBNavItem active={isCurrentUrl("contactos")}>
              <Link to="/">Contacto</Link>
            </MDBNavItem>          
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default TopNav;