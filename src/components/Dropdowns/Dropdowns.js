import React from "react";
import "./dropdowns-styles.css";

export const Dropdowns = (props) => {
  return (
    <div className="dropdown-container">
      <div className="button-group">
        <button
          type="button"
          className="btn btn-default btn-sm dropdown-toggle filter-btn"
          data-toggle="dropdown"
        >
          <span className="filter-title">{props.name}</span>
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <input type="checkbox" className="checkboxes" />
            &nbsp;&nbsp;&nbsp;Fire
          </li>
          <li>
            <input type="checkbox" className="checkboxes" />
            &nbsp;&nbsp;&nbsp;Normal
          </li>
          <li>
            <input type="checkbox" className="checkboxes" />
            &nbsp;&nbsp;&nbsp;Electric
          </li>
          <li>
            <input type="checkbox" className="checkboxes" />
            &nbsp;&nbsp;&nbsp;Water
          </li>
        </ul>
      </div>
    </div>
  );
};
