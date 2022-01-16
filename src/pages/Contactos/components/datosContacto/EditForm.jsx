import React, { Fragment } from "react";

//MDBREACT
import { MDBIcon, MDBAnimation } from "mdbreact";
import { Button } from "antd";

const EditForm = ({
  editForm,
  enableEditForm,
  keyEditForm,
  saveChangesInput,
}) => {
  return (
    <Fragment>
      {!editForm[keyEditForm] ? (
        <MDBAnimation type="fadeIn">
          <Button
            className="edit-form z-depth-0 px-3"
            color="tranparent"
            onClick={() => enableEditForm(keyEditForm)}
          >
            <MDBIcon className="blue-text mx-1" icon="edit" size="lg" />
            Editar
          </Button>
        </MDBAnimation>
      ) : (
        <Fragment>
          <MDBAnimation type="bounceIn">
            <Button
              className={`edit-form z-depth-0 px-3 ${
                editForm[keyEditForm] ? "visible" : null
              }`}
              color="tranparent"
              onClick={
                saveChangesInput
                  ? () => saveChangesInput(keyEditForm)
                  : () => enableEditForm(keyEditForm)
              }
            >
              <MDBIcon className="green-text mx-1" icon="check" size="lg" />
              Aplicar
            </Button>
          </MDBAnimation>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EditForm;
