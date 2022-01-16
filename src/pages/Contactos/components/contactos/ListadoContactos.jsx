import React, { Fragment } from "react";

// Components
import Contacto from "./Contacto.jsx";
import Pagination from "../../../../ui/components/Pagination";

// Mdbreact
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const ListadoContactos = (props) => {
  /************ Destructuring ************/
  const {
    contactos,
    paginationTotalItems,
    currentPagePagination,
    setCurrentPagePagination,
  } = props;

  return (
    <Fragment>
      <MDBTable responsive hover style={{ minHeight: "25vh" }}>
        <MDBTableHead color="blue-grey" textWhite>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {contactos.map((contacto) => {
            return (
              <Contacto contacto={contacto} key={contacto.id} />
            );
          })}
        </MDBTableBody>
      </MDBTable>
      {contactos.length === 0 ? (
        <p className="text-center">No existen contactos</p>
      ) : null}
      <Pagination
        paginationTotalItems={paginationTotalItems}
        currentPagePagination={currentPagePagination}
        setCurrentPagePagination={setCurrentPagePagination}
      />
    </Fragment>
  );
};

export default ListadoContactos;
