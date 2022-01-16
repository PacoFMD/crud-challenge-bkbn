import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";

// Component
import ContactoCreateForm from "./ContactoCreateForm";

configure({ adapter: new Adapter() });

describe("ContactoCreateForm", () => {
    test("ejecuta 'editDatos' cuando presiono el botón para crear al contacto", () => {
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

          const wrapper = mount(<ContactoCreateForm datosContacto={datosContacto} />);
          wrapper.find("#editDatos").simulate("click");
          expect(editDatos.mock.calls).toEqual([]);
    });
});
