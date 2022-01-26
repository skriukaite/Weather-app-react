import React from "react";

import "../Styles/TimeForSection.css";
import tea from "../Media/tea.svg";

export default function TimeForSection() {
  return (
    <div className="TimeForSection">
      <div className="section-current-temperature">
        <div className="row">
          <div className="col-5">
            <img
              src={tea}
              alt="tea icon"
              className="time-for-icon"
              id="offer-image"
            />
            <p className="time-for">
              Time for <span id="offer">herbal tea</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
