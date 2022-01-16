import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";

// COMPONENTS;
import Spinner from "../../../../ui/components/Spinner";


// MDBREACT
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

export const useContactoViewForm = (props)=>
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

  const {
    firstName,
    lastName,
    email,
    phone,
    createdAt,
    updatedAt,
  } = datosContacto;

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

  return{
    loading,
    datosContacto 
  }

};

const ContactoViewForm = (props) => {
  const{
    loading,
    datosContacto
  }=useContactoViewForm(props);

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
                    <p className="h5 mb-3 mt-2 ">Datos personales</p>
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

export default ContactoViewForm;
