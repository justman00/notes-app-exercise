import React from 'react';
import ReactDOM from "react-dom";

const EditNote = () => {
    return ReactDOM.createPortal(
        <div>Hello</div>,
        document.querySelector("#modal_window")
    )
}

export default EditNote;