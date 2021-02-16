import React from "react";
import { connect } from "react-redux";
import { actionGetNotes } from "../actions/ActionGetNotes";
import { useEffect } from "react";
const Home = (props) => {
  useEffect(() => {
    props.actionGetNotes();
  }, []);

  return (
    <div>
      {props.notes.length < 1 ? (
        <div>Loading</div>
      ) : (
        <div className="notes">
          {props.notes.map((note) => (
            <div key={note.ts} className="notes"><br />
              Title: {note.data.title}
              <br />
              Content: {note.data.content}
              <br />
              Tags: {note.data.tags} 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  actionGetNotes,
};
const mapStateToProps = (state) => {
  return { notes: state.notes };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
