import React, { Fragment, useState } from "react";
import Axios from "axios";

// COMPONENTS;
import EditForm from "./EditForm"
import Spinner from "../../../../ui/components/Spinner";


// MDBREACT
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

//ANT DESIGN
import { message } from "antd";

export const useContactoCreateForm = ()=>{
  const [loading] = useState(false);
  
  //Contacto
  const [datosContacto, setDatosContacto] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const {
    firstName,
    lastName,
    email,
    phone,
  } = datosContacto;

  const handleChangeInput = (e) => {
    setDatosContacto({
      ...datosContacto,
      [e.target.name]: e.target.value,
    });
  };

  const [editForm, setEditForm] = useState({
    datosPersonales: false,
  });

  const enableEditForm = (formKey) => {
    setEditForm({
      ...editForm,
      [formKey]: !editForm[formKey],
    });
  };

  const saveChangesInput = async (keyEditForm) => {
      try {
        const responsePut = await Axios.post(
          `https://bkbnchallenge.herokuapp.com/contacts/`,
          datosContacto
        );

        const statusValuePut = responsePut.status;

        if (statusValuePut === 200) {
          message.success({
            content: "Se ha creado el contacto",
            className: "custom-class",
            style: {
              marginTop: "5rem",
            },
          });
        }
        

        enableEditForm(keyEditForm);
      } catch (error) {

        

        var datoPut = "null";
        for (var propPut in error.response.data) {
          datoPut = propPut.toString();
          break;
        }
        var errormsgPut = error.response.data[datoPut];

        if (errormsgPut === 400) {
            message.error({
              content: "Email must be a valid email",
              className: "custom-class",
              style: {
                marginTop: "5rem",
              },
            });
          }else{
              message.error({
                content: "Error en " + datoPut + ": " + errormsgPut,
                className: "custom-class",
                style: {
                  marginTop: "5rem",
                },
              });
          }

        console.error(error);
        enableEditForm(keyEditForm);
      }
  };

  return{
    datosContacto,
    loading,
    editForm,
    handleChangeInput,
    enableEditForm,
    saveChangesInput
  }
};

const ContactoCreateForm = (props) => {
  
  const{
    datosContacto,
    loading,
    editForm,
    handleChangeInput,
    enableEditForm,
    saveChangesInput
  }=useContactoCreateForm();


  return (
    <Fragment>
      <form>
        <p className="h4 mt-4 grey-text-1">
          Datos del Contacto
        </p>

        {loading ? (
          <Spinner marginTop={"5rem"} />
        ) : (
          <>
            {/***************************** DATOS PERSONALES *****************************/}
            <MDBCard className="mt-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="8">
                    <p className="h5 mb-3 mt-2 ">Crear Contacto</p>
                  </MDBCol>
                  <MDBCol md="4" className="d-flex justify-content-end">
                    <EditForm
                      id="editDatos"
                      editForm={editForm}
                      enableEditForm={enableEditForm}
                      keyEditForm="datosPersonales"
                      saveChangesInput={saveChangesInput}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={!editForm.datosPersonales}                      
                      label="Nombre/s"
                      type="text"
                      name="firstName"
                      outline
                      value={datosContacto.firstName}
                      onChange={handleChangeInput}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={!editForm.datosPersonales}
                      label="Apellidos"
                      type="text"
                      name="lastName"
                      outline
                      value={datosContacto.lastName}
                      onChange={handleChangeInput}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={!editForm.datosPersonales}
                      label="Correo"
                      type="email"
                      name="email"
                      outline
                      value={datosContacto.email}
                      onChange={handleChangeInput}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={!editForm.datosPersonales}
                      label="Telefono"
                      type="text"
                      name="phone"
                      outline
                      value={datosContacto.phone}
                      onChange={handleChangeInput}
                    />
                  </MDBCol>                  
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </>
        )}
      </form>
    </Fragment>
  );
};

export default ContactoCreateForm;
