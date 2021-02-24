import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {editNote} from './../actions/EDIT_NOTE';

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  height: 100vh;
  width: 100%;
  z-index: 9999;
`;

const StyledSecDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #8b5396;
  height: 600px;
  width: 600px;
  border-radius: 10px;
`;

const UpdateNote = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const selectedNote = notes.find((note) => note.ref.value.id === params.id);
  const [formData, setFormData] = useState(selectedNote.data);

  const handleInput = (evt) => {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
      })
  }

  const handleClick = () => {
      dispatch(editNote(selectedNote.ref.value.id, formData)).then(
        history.push(`/notes/${params.id}`)
      )
  }

  return (
    <StyledDiv>
      <StyledSecDiv>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "50px",
          }}
        >
          <input
            style={{
              width: "550px",
              height: "45px",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "10px",
              fontSize: "17px",
              border: "none",
              outline: "none",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            name = "title"
            defaultValue={formData.title}
            onChange = {handleInput}
          ></input>
          <TextField
            defaultValue={formData.content}
            style={{
              width: "550px",
              backgroundColor: "white",
              marginTop: "15px",
              borderRadius: "10px",
            }}
            id="outlined-textarea"
            name="content"
            variant="outlined"
            multiline
            onChange = {handleInput}
          />
          <div style={{ paddingTop: "15px" }}>
            <Button variant="contained" color="primary" onClick = {handleClick}>
              Save
            </Button>
            <Link to = {`/notes/${selectedNote.ref.value.id}`} style = {{textDecoration: 'none'}}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "12px" }}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </StyledSecDiv>
    </StyledDiv>
  );
};

export default UpdateNote;
