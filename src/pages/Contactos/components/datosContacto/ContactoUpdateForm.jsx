import React, { Fragment, useState, useEffect } from "react";
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

export const useContactoUpdateForm = (props)=>
{
  const [loading, setLoading] = useState(false);
  const { id } = props.match.params;
  
  //Contacto
  const [datosContacto, setDatosContacto] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createdAt: "",
    updatedAt: "",
  });
  
  useEffect(() => {
    setLoading(true);
    const fetchDatosContacto = async () => {
        
      try {
        const  response = await Axios.get(
          `https://bkbnchallenge.herokuapp.com/contacts/${id}`
        );
        
        const results = response.data;
        const statusCode = response.status;
  
        if (statusCode === 200) {
         
            setDatosContacto({
            ...datosContacto,
            firstName: results.firstName === "" ? null : results.firstName,
            lastName: results.lastName === "" ? null : results.lastName,
            email: results.email === null ? "" : results.email,
            phone: results.phone === "" ? null : results.phone,
            createdAt: results.createdAt === null ? "" : results.createdAt,
            updatedAt: results.updatedAt === null ? "" : results.updatedAt,
            });
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
  
    fetchDatosContacto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
        const responsePut = await Axios.put(
          `https://bkbnchallenge.herokuapp.com/contacts/${id}/`,
          datosContacto
        );
  
        const statusValuePut = responsePut.status;
  
        if (statusValuePut === 200) {
          message.success({
            content: "Se han actualizado los datos",
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
    loading,
    datosContacto,
    handleChangeInput,
    editForm,
    enableEditForm,
    saveChangesInput
  }

};


const ContactoUpdateForm = (props) => {

  const{
    loading,
    datosContacto,
    handleChangeInput,
    editForm,
    enableEditForm,
    saveChangesInput
  }=useContactoUpdateForm(props);


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
                    <p className="h5 mb-3 mt-2 ">Actualizar Datos personales</p>
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
                      type="text"
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
                  <MDBCol sm="6" md="4" lg="3">
                  <MDBInput
                      disabled={true}
                      label="Fecha Creacion"
                      type="text"
                      name="createdAt"
                      outline
                      value={datosContacto.createdAt}
                      onChange={handleChangeInput}                   
                    />
                  </MDBCol>
                  <MDBCol sm="6" md="3" lg="3">
                  <MDBInput
                      disabled={true}
                      label="Fecha Actualizacion"
                      type="text"
                      name="updatedAt"
                      outline
                      value={datosContacto.updatedAt} 
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

export default ContactoUpdateForm;
