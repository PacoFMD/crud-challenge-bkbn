import React from "react";
// Router
import { Route, Switch } from "react-router-dom";

// Components
import Layout from "./layout/Layout";
import Contactos from "../src/pages/Contactos/containers/Contactos";
import ContactoView from "../src/pages/Contactos/components/datosContacto/ContactoViewForm"
import ContactoUpdate from "../src/pages/Contactos/components/datosContacto/ContactoUpdateForm"
import ContactoDelete from "../src/pages/Contactos/components/datosContacto/ContactoDeleteForm"
import ContactoCreate from "../src/pages/Contactos/components/datosContacto/ContactoCreateForm"

// Context
import { ContactoProvider } from "./context/contactoContext";

const Routes = () => {
  return (
    <Switch>   
      {/*Estos son los providers que rodean a los componentes donde quieras consumir a su context*/}
      <ContactoProvider>
        <Layout>
          <Route exact path="/" component={Contactos} /> 
          <Route exact path="/contacts/view/:id" component={ContactoView} /> 
          <Route exact path="/contacts/update/:id" component={ContactoUpdate} /> 
          <Route exact path="/contacts/delete/:id" component={ContactoDelete} /> 
          <Route exact path="/contacts/create/" component={ContactoCreate} />     
        </Layout>
      </ContactoProvider>
    </Switch>
  );
};

export default Routes;
