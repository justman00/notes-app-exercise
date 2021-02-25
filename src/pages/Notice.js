import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../component/DeleteModal";
import { actionGetNote } from "../actions/ActionGetNotes";
import { useEffect } from "react";
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
              <div
                className="tagEdit"
                key={Math.floor(Math.random() * 100 + Math.random())}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <button className="glow-on-hover">Edit</button>

        <Link to={`/notice/${params.id}/delete`}>
          <button className="glow-on-hover">Delete</button>
        </Link>
        <Switch>
          <Route path="/notice/:id/delete" component={DeleteModal} />
        </Switch>
      </div>
    </div>
  );
};
export default Notice;
