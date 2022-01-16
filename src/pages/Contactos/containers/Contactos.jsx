import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import { Menu, Dropdown, Button, Checkbox } from "antd";

// MDBREACT
import {
  MDBAnimation,
  MDBIcon,
  MDBRow,
  MDBCol
} from "mdbreact";

//Components
import ListadoContactos from "../components/contactos/ListadoContactos";
import Spinner from "../../../ui/components/Spinner"; 
// Context
import { useContacto } from "../../../context/contactoContext";
import { Button } from "antd";



const Contactos = () => {
  const {
    contactos,
    paginationTotalItems,
    currentPagePagination,
    setCurrentPagePagination,
    loading,
  } = useContacto();
 
  return (
    <Fragment>
      <MDBRow between>
        <MDBCol md="5" lg="6" className="d-flex align-items-center">
          <p className="h4 mb-0">
            Mis Contactos
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow end>        
        <MDBCol
          xs="12"
          md="7"
          lg="1"
          className="order-1 order-lg-2 d-flex justify-content-sm-start justify-content-lg-end mt-4 mt-md-0"
        >
           <Link to={`/contacts/create/`}>
            <Button
              color="transparent"
              className="rounded z-depth-0 grey-hover-btn button-text my-2 d-flex align-items-center "
              
            >
              <div>              
              <MDBIcon
                icon="plus"
                size="lg"
                flip="horizontal"
                className="mr-1 blue-text"
              />
              Agregar
              </div>
            </Button>
            </Link>
        </MDBCol>
      </MDBRow>
      {loading ? (
        <Spinner marginTop={"5rem"} />
      ) : (
        <MDBAnimation type="fadeIn" duration="500ms">
          <ListadoContactos
            contactos={contactos}
            paginationTotalItems={paginationTotalItems}
            currentPagePagination={currentPagePagination}
            setCurrentPagePagination={setCurrentPagePagination}
          />
        </MDBAnimation>
      )}
    </Fragment>
  );
};

export default Contactos;
