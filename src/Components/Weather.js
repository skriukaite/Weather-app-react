import React from "react";

import "../Styles/Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Section-current-temperature">
        <div className="row">
          <div className="col-4">
            <div className="current-temperature" id="current-degrees">
              2
            </div>
          </div>
          <div className="col-3 temperature-properties">
            <ul className="Weather-icon">
              <li>
                <i className="fas fa-cloud-sun current-weather-icon"></i>
              </li>
              {/* <li>
                <span id="celsius-link">°C</span>
              </li>
              <li>
                Feels like <span id="feels-like">-1</span>
              </li>
              <li>
                Wind <span id="wind">11</span> kh/h
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
