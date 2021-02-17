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
            <div key={note.ts} className="card">
              <div>
                <div className="cardAtribut">Title :</div> {note.data.title}
              </div>

              <div>
                <div className="cardAtribut">Content :</div>
                {note.data.content}
              </div>

              <div>
                <div className="cardAtribut">Tags :</div>
                {note.data.tags.map((tag) => (
                  <div key={Math.floor(Math.random() * 100)} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
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
