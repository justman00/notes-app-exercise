import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useParams, Link, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import UpdateNote from "./../pages/EditNote";
import {removeNote} from './../actions/DELETE_NOTE';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "120px",
  },
  root: {
    width: 600,
    height: "fit-content",
    backgroundColor: "#c5e8b3",
    borderRadius: "10px 10px 0 0",
  },
}));

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 17, 18, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const NoteInfo = () => {
  const classes = useStyles();
  const typografyRef = useRef();
  const notes = useSelector((state) => state.notes);
  const params = useParams();
  const history = useHistory();

  const selectedNote = notes.find((note) => note.ref.value.id === params.id);
  const dispatch = useDispatch();

  if (!selectedNote) {
    return <h3>Nu exista asa notita</h3>;
  }

  const handleDelete = () => {
      dispatch(removeNote(selectedNote.ref.value.id)).then(
        history.push('/')
      )
  }

  return ReactDOM.createPortal(
    <StyledDiv>
      <Card
        className={classes.root}
        style={{ zIndex: "5", border: "none", outline: "none" }}
      >
        <CardHeader
          title={selectedNote.data.title}
          style={{
            borderBottom: "2px solid gray",
            fontFamily: "Roboto",
            outline: "none",
          }}
        />
        <CardContent>
          <Typography
            ref={typografyRef}
            variant="body2"
            color="initial"
            component="p"
            style={{ border: "none", outline: "none", height: "fit-content" }}
          >
            {selectedNote.data.content}
          </Typography>
        </CardContent>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: "600px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "10px",
          borderRadius: "0 0 10px 10px",
          borderTop: "2px solid gray",
          outline: "none",
          backgroundColor: "#c5e8b3",
        }}
      >
        <Link
          to={`/notes/${selectedNote.ref.value.id}/edit`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Edit
          </Button>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
          onClick = {handleDelete}
        >
          Delete
        </Button>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
          >
            Cancel
          </Button>
        </Link>
      </div>
      <Route path="/notes/:id/edit" component={UpdateNote} />
    </StyledDiv>,
    document.querySelector("#modal_window")
  );
};

export default NoteInfo;
