import React from "react";
import { useLocation } from "react-router-dom";

const Notice = () => {
  const location = useLocation();

  const dates = location.state.data.data;
  console.log("...>..", dates);
  return (
    <div className="notice-box">
      <div>
        <div className="element-box title-box">
          <div>{dates.title}</div>
        </div>

        <div className="element-box">
          <p>{dates.content}</p>
        </div>

        <div className="element-box">
          <div className="tagsEdit">
            {dates.tags.map((tag) => (
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
        <button className="glow-on-hover">Delete</button>
      </div>
    </div>
  );
};
export default Notice;
