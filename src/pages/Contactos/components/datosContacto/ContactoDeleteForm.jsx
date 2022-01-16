import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

// COMPONENTS;
import Spinner from "../../../../ui/components/Spinner";


// MDBREACT
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBIcon,
  MDBCardBody,
} from "mdbreact";

//ANT DESIGN
import { Button, message } from "antd";
import { useContacto } from "../../../../context/contactoContext";

export const useContactoDeleteForm = (props) =>{

  const [loading, setLoading] = useState(false);
  const { id } = props.match.params;
  const { fetchContactos } = useContacto
  const history = useHistory();
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
  
  const handleRemove = async (e) => {
      try {
        const responsePut = await Axios.delete(
          `https://bkbnchallenge.herokuapp.com/contacts/${id}/`
        );
  
        const statusValuePut = responsePut.status;
  
        if (statusValuePut === 200) {
          message.success({
            content: "Se ha borrado exitosamente",
            className: "custom-class",
            style: {
              marginTop: "5rem",
            },
          });
          history.push("/");
          // setTimeout(() => {
          //     fetchContactos();
          //   }, 600);
        }
  
      } catch (error) {
        var datoPut = "null";
        for (var propPut in error.response.data) {
          datoPut = propPut.toString();
          break;
        }
        var errormsgPut = error.response.data[datoPut];
  
        message.error({
          content: "Error en " + datoPut + ": " + errormsgPut,
          className: "custom-class",
          style: {
            marginTop: "5rem",
          },
        });
  
        console.error(error);
      }
  };

  return{
    loading,
    datosContacto,
    handleRemove
  }
};

const ContactoDeleteForm = (props) => {
  const{
    loading,
    datosContacto,
    handleRemove
  }=useContactoDeleteForm(props);


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
                    <p className="h5 mb-3 mt-2 ">Eliminar Datos personales</p>
                  </MDBCol>
                    
                  <MDBCol md="4" className="d-flex justify-content-end">
                  <Button
                        color="transparent"
                        className="rounded z-depth-0 grey-hover-btn button-text my-3 d-flex align-items-center "
                        onClick={handleRemove}
                    >
                        <div>              
                            <MDBIcon
                                icon="trash"
                                size="lg"
                                flip="horizontal"
                                className="mr-1 red-text"
                            />
                            Delete
                        </div>
                    </Button>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={true}
                      label="Nombre/s"
                      type="text"
                      name="firstName"
                      outline
                      value={datosContacto.firstName}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={true}
                      label="Apellidos"
                      type="text"
                      name="lastName"
                      outline
                      value={datosContacto.lastName}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={true}
                      label="Correo"
                      type="text"
                      name="email"
                      outline
                      value={datosContacto.email}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      disabled={true}
                      label="Telefono"
                      type="text"
                      name="phone"
                      outline
                      value={datosContacto.phone}
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

export default ContactoDeleteForm;
