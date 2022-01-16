import React, { Fragment } from "react";
import { Link } from "react-router-dom";


import { Button } from "antd";
import { FormOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
const Contacto = (props) => {
  /************ Destructuring ************/
  const { contacto } = props;
  const {
    id,
    firstName,
    lastName,
    email,
    phone
  } = contacto;

  return (
    <Fragment>
      <tr>
        <td>{firstName}</td>
        <td>
          {lastName}
        </td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
        <Link to={`/contacts/view/${id}`}>
        <Button
            style={{ color: "blue" }}
            className="rounded z-depth-0 "
            icon={
              <EyeOutlined
                className={"d-flex justify-content-center aling-items-center"}
              />
            }           
            size="large"
            shape="round"
            ghost
          />  
        </Link>
        <Link to={`/contacts/update/${id}`}>
        <Button
            style={{ color: "orange" }}
            className="rounded z-depth-0 "
            icon={
              <FormOutlined
                className={"d-flex justify-content-center aling-items-center"}
              />
            }           
            size="large"
            shape="round"
            ghost
          />
            </Link>
            <Link to={`/contacts/delete/${id}`}>
            <Button
            style={{ color: "red" }}
            className="rounded z-depth-0 "
            icon={
              <DeleteOutlined
                className={"d-flex justify-content-center aling-items-center"}
              />
            }           
            size="large"
            shape="round"
            ghost
          />
            </Link>
          </td>
            
      </tr>
    </Fragment>
  );
};

export default Contacto;
