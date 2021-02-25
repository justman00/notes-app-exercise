import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../component/DeleteModal";
import { actionGetNote } from "../actions/ActionGetNotes";
import { useEffect } from "react";
import EditModal from "../component/EditModal";
const Notice = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetNote(params.id));
  }, [dispatch, params.id]);

  const note = useSelector((state) => state.note);

  return Object.keys(note).length === 0 ? (
    <div className="loader"></div>
  ) : (
    <div className="notice-box">
      <div>
        <div className="element-box title-box">
          <div>{note.data.title}</div>
        </div>

        <div className="element-box">
          <p>{note.data.content}</p>
        </div>

        <div className="element-box">
          <div className="tagsEdit">
            {note.data.tags.map((tag) => (
              <div className="tagEdit" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <Link to={`/notice/${params.id}/edit`}>
          <button className="glow-on-hover">Edit</button>
        </Link>

        <Link to={`/notice/${params.id}/delete`}>
          <button className="glow-on-hover">Delete</button>
        </Link>

        <Switch>
          <Route path="/notice/:id/delete" component={DeleteModal} />
          <Route
            path="/notice/:id/edit"
            render={(props) => <EditModal {...props} date={note} />}
          />

        </Switch>
      </div>
    </div>
  );
};
export default Notice;



