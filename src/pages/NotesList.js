import React from "react";
import { connect } from "react-redux";
import { Container, Text } from "@chakra-ui/react";
import NoteCard from "../components/NoteCard";

const NotesList = (props) => {
  return (
    <Container align="center" mt="10">
      {props.loading ? (
        <Text align="center" mt="6" color="teal" fontWeight="semibold">
          Loading...
        </Text>
      ) : null}
      {props.notes
        .sort((a, b) => a.ts - b.ts)
        .map((note, idx) => {
          console.log("note:", note);
          return <NoteCard key={idx} note={note} />;
        })}
      {props.error ? (
        <Text align="center" mt="6" fontWeight="semibold" color="red.300">
          {props.error}
        </Text>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { loading: state.loading, error: state.error, notes: state.notes };
};

export default connect(mapStateToProps)(NotesList);
