import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreateNote } from "../actions/ActionsCreateNote";

const AddNotice = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialData = {
    title: "",
    content: "",
  };
  const [selectData, setSelectData] = useState([]);
  const [noticeData, setNoticeData] = useState(initialData);

  const setData = (e) => {
    if (!selectData.includes(e.target.value)) {
      setSelectData([...selectData, e.target.value]);
    }
  };

  const inputTitle = (e) => {
    setNoticeData({ ...noticeData, title: e.target.value });
  };

  const inputContent = (e) => {
    setNoticeData({ ...noticeData, content: e.target.value });
  };

  const addToDataBase = () => {
    const allDates = {
      title: noticeData.title,
      content: noticeData.content,
      tags: selectData,
    };
    dispatch(actionCreateNote(allDates)).then(() => {
      history.push("/home");
    });
  };

  return (
    <div>
      <div className="addNotice">
        <form>
          <label>Title</label>
          <input onChange={inputTitle}></input>

          <label>Content</label>
          <textarea onChange={inputContent}></textarea>

          <label>Tags</label>

          <select name="tags" id="cars" onChange={setData}>
            <option value="bussines ">bussines</option>
            <option value="dezvoltare-personala">dezvoltare-personala</option>
            <option value="actorie">actorie</option>
            <option value="viata-personala">viata-personala</option>
          </select>
          <div className="listSelected">
            {selectData.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </div>
        </form>
      </div>
      <button className="addNoticeButton" onClick={addToDataBase}>
        Add
      </button>
    </div>
  );
};
export default AddNotice;
