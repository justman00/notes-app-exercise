import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "./NoteCard";
import styled from "styled-components";

import { getNotes } from "./../actions/GET_ALL_NOTES";

const StyledMainDiv = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Notes = () => {
  const { notes, loading } = useSelector((state) => ({
    notes: state.notes,
    loading: state.loading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <StyledMainDiv>
        {loading ? (
          <h3>Loading notes...</h3>
        ) : (
          notes.map((note, index) => <NoteCard key={index} note={note} />)
        )} 
    </StyledMainDiv>
  );
};

export default Notes;
