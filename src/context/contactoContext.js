import React, { useState, useEffect } from "react";
import Axios from "axios";

const ContactoContext = React.createContext();

export function ContactoProvider(props) {
  /***************** States *****************/
  const [contactos, setContactos] = useState([]);
  const [paginationTotalItems, setPaginationTotalItems] = useState(0);
  const [currentPagePagination, setCurrentPagePagination] = useState(1);
  const [loading, setLoading] = useState(false);

  /***************** Functions *****************/

  /* Realiza un request a la api , utilizando los parámetros de la función
     como query params en la url */
  const fetchContactos = async () => {
    console.log("en el fetcch")
    try {
      setLoading(true);
      const { data } = await Axios.get(
        `https://bkbnchallenge.herokuapp.com/contacts/?perPage=10${
          currentPagePagination ? `&page=${currentPagePagination}` : ""
        }`
      );
      const { count, results } = data;

      setContactos(results);
      setPaginationTotalItems(count);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  /***************** Lifecycle *****************/

  useEffect(() => {
    console.log("en el fetcch")
    fetchContactos();
  }, [currentPagePagination]);


  const value = React.useMemo(() => {
    return {
      fetchContactos,
      contactos,
      setContactos,
      paginationTotalItems,
      setPaginationTotalItems,
      currentPagePagination,
      setCurrentPagePagination,
      loading,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactos, paginationTotalItems, loading]);

  return <ContactoContext.Provider value={value} {...props} />;
}

export function useContacto() {
  const context = React.useContext(ContactoContext);
  console.log("en el useContacto")
  if (!context) {
    throw new Error(
      "useContacto debe estar dentro del proveedor ContactoContext"
    );
  }
  return context;
}
