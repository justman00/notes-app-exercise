import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { addNote } from "./../actions/ADD_NOTE";

const StyledDiv = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  font-size: 17px;
  height: 45px;
  border: none;
  outline: none;
  background-color: rgb(242, 242, 240);
  border-radius: 10px 10px 0 0;
  width: 550px;
  border-radius: 10px;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "120px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
    },
  },
}));

const initialFormData = {
  title: "",
  content: "",
  tags: [],
};

const CreateBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [length, setLength] = useState(0);
  const inputRef = useRef();
  const contentRef = useRef();

  const MAX_LENGTH = 1200;

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleInput = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
      setLength(contentRef.current.value.length);
  };

  const handleClick = (evt) => {
    dispatch(addNote(formData));
    inputRef.current.value = "";
    contentRef.current.value = "";
    setIsClicked(false);
    setLength(0);
  };

  return (
    <StyledDiv>
      <StyledForm>
        <StyledInput
          ref={inputRef}
          style={{ display: isClicked ? "initial" : "none" }}
          placeholder="Title"
          name="title"
          onChange={handleInput}
        ></StyledInput>
        <TextField
          inputProps = {{maxLength: MAX_LENGTH}}
          inputRef={contentRef}
          helperText = {`${length}/${MAX_LENGTH}`}
          style={{ marginTop: "10px", width: "550px" }}
          id="outlined-textarea"
          placeholder="Create a note"
          name="content"
          multiline
          variant="outlined"
          onClick={() => {
            setIsClicked(true);
          }}
          onChange={handleInput}
        />
        <div style={{ display: isClicked ? "initial" : "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={handleClick}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={() => {
              setLength(0);
              inputRef.current.value = "";
              contentRef.current.value = "";
              setIsClicked(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </StyledForm>
    </StyledDiv>
  );
};

export default CreateBar;
