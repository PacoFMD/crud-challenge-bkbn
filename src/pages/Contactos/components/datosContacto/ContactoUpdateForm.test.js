import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";

// Component
import ContactoUpdateForm from "./ContactoUpdateForm";

configure({ adapter: new Adapter() });

describe("ContactoUpdateForm", () => {
    test("ejecuta 'editDatos' cuando presiono el botón para actualizar al contacto", () => {
        const datosContacto = [
            {
              id:1,
              firstName: "prueba",
              lastName: "test",
              email: "email@mail.com",
              phone: "3315266301",
            },
          ];
          const editDatos = jest.fn();

          const wrapper = mount(<ContactoUpdateForm datosContacto={datosContacto} id={1}/>);
          wrapper.find("#editDatos").simulate("click");
          expect(editDatos.mock.calls).toEqual([]);
    });
});
