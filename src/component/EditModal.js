import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { editNoteAction } from "../actions/ActionEdit";

const EditModal = (props) => {
  const note = props.date.data;
  const initialData = {
    title: note.title,
    content: note.content,
    tags: note.tags,
  };
  const [noticeData, setNoticeData] = useState(initialData);

  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const changeInputTitle = (e) => {
    setNoticeData({ ...noticeData, title: e.target.value });
  };
  const changeInputContent = (e) => {
    setNoticeData({ ...noticeData, content: e.target.value });
  };
  const deleteTag = (e) => {
    setNoticeData({
      ...noticeData,
      tags: noticeData.tags.filter((num) => num !== e),
    });
  };
  const setData = (e) => {
    if (!noticeData.tags.includes(e.target.value)) {
      setNoticeData({
        ...noticeData,
        tags: [...noticeData.tags, e.target.value],
      });
    }
  };
  const onDismiss = (e) => {
    history.push(`/notice/${params.id}`);
  };

  const onApply = () => {
    dispatch(editNoteAction(props.date.ref.value.id, noticeData)).then(() => {
      history.push(`/home/`);
    });
  };

  return ReactDOM.createPortal(
    <div className="modal-box-root">
      <div className="modal-box-background">
        <div className="modal-box">
          Edit Notice
          <div className="modal-box-form">
            <div className="modal-box-form-element">
              <label>Title</label>
              <input
                value={noticeData.title}
                onChange={changeInputTitle}
              ></input>
            </div>
            <div className="modal-box-form-element">
              <label>Content</label>
              <textarea
                value={noticeData.content}
                onChange={changeInputContent}
              ></textarea>
            </div>

            <div className="modal-box-form-element">
              <div className="taglist">
                <label className="tag-label">Tags:</label>
                <div className="modal-box-tag-list">
                  {noticeData.tags.map((d) => (
                    <div className="modal-box-tag-element" key={d}>
                      <div className="element"> {d}</div>
                      <div
                        className="element-remove"
                        onClick={() => {
                          deleteTag(d);
                        }}
                      >
                        x
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <select name="tags" onChange={setData}>
                <option value="bussines">bussines</option>
                <option value="dezvoltare-personala">
                  dezvoltare-personala
                </option>
                <option value="actorie">actorie</option>
                <option value="viata-personala">viata-personala</option>
              </select>
            </div>
          </div>
          <div className="modal-buttons">
            <button className="modal-button-apply" onClick={onApply}>
              Apply
            </button>
            <button className="modal-button-cancel" onClick={onDismiss}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#edit-modal-root")
  );
};
export default EditModal;
