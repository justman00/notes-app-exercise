import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { actionDelete } from "../actions/ActionDelete";

const DeleteModal = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const onDismiss = (e) => {
    history.push(`/notice/${params.id}`);
  };

  const onDelete = () => {
    dispatch(actionDelete(params.id)).then(() => {
      history.push("/home");
    });
  };

  return ReactDOM.createPortal(
    <div className="modal-box-root">
      <div className="modal-box-background">
        <div className="modal-box">
          Are you sure you want to delete the note?
          <div className="modal-buttons">
            <button className="modal-button-yes" onClick={onDelete}>
              Yes
            </button>
            <button className="modal-button-no" onClick={onDismiss}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};
export default DeleteModal;
