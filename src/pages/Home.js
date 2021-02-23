import React from "react";
import { connect } from "react-redux";
import { actionGetNotes } from "../actions/ActionGetNotes";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Home = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.actionGetNotes();
  }, []);

  const routeToEdit = (note) => {
    history.push({
      pathname: `/edit-notice:id${note.ref.value.id}`,
      state: { data: note },
    });
  };

  return (
    <div>
      {props.notes.length < 1 ? (
        <div>Loading</div>
      ) : (
        <div className="notes">
          {props.notes.map((note) => (
            <div
              key={note.ts}
              className="card"
              onClick={() => {
                routeToEdit(note);
              }}
            >
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
                  <div
                    key={Math.floor(Math.random() * 100 + Math.random())}
                    className="tag"
                  >
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
