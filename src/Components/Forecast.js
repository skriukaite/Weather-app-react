import React from "react";

import "../Styles/Forecast.css";

export default function Forecast() {
  return (
    <div className="section-forecast">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            Thursday <br />
            <i className="fas fa-cloud-sun weather-icon"></i>
            <p className="forecast-temperature">
              <strong>3</strong>|-4
            </p>
          </div>
          <div className="col-sm">
            Friday <br />
            <i className="fas fa-sun weather-icon"></i>
            <p className="forecast-temperature">
              <strong>2</strong>|-6
            </p>
          </div>
          <div className="col-sm">
            Saturday <br />
            <i className="fas fa-cloud-sun weather-icon"></i>
            <p className="forecast-temperature">
              <strong>4</strong>|1
            </p>
          </div>
          <div className="col-sm">
            Sunday <br />
            <i className="fas fa-cloud weather-icon"></i>
            <p className="forecast-temperature">
              <strong>5</strong>|0
            </p>
          </div>
          <div className="col-sm">
            Monday <br />
            <i className="fas fa-cloud-sun weather-icon"></i>
            <p className="forecast-temperature">
              <strong>0</strong>|-9
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
