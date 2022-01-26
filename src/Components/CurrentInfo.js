import React from "react";

import "../Styles/CurrentInfo.css";

export default function CurrentInfo() {
  return (
    <div className="CurrentInfo">
      <div className="section-search">
        <div className="current-city" id="entered-current-city">
          Vilnius
        </div>
        <div className="current-time" id="accurate-current-time">
          Wednesday, 23:00
        </div>
      </div>
    </div>
  );
}
