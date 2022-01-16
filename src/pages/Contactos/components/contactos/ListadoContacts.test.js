import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ListadoContactos from "./ListadoContactos";

configure({ adapter: new Adapter() });

describe("ListadoContactos", () => {
  test("Se renderiza el componente completo", () => {
    const datosContacto = [
      {
        id:1,
        firstName: "prueba",
        lastName: "test",
        email: "email@mail.com",
        phone: "3315266301",
      },
      {
        id:2,
        firstName: "prueba1",
        lastName: "test2",
        email: "email1@mail.com",
        phone: "3315226301",
      },
    ];
    const wrapper = mount(<ListadoContactos datosContacto={datosContacto} />);

    expect(wrapper).toEqual({});
  });
});
