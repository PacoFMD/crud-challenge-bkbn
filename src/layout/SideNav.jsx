import React from "react";
import { NavLink } from "react-router-dom";

import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";

const SideNav = () => {
  return (
    <div className="sidebar sticky-top">
      <a href="#!" className="logo-wrapper">
        <h2>CRUD</h2>
      </a>
      <MDBListGroup className="list-group-flush">      
        {/***** Contactos *****/}
          <NavLink to="/" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="table" className="mr-3" />
              Contactos
            </MDBListGroupItem>
          </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default SideNav;
