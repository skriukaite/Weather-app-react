import React from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";
import CurrentInfo from "./Components/CurrentInfo";
import Weather from "./Components/Weather";
import TimeForSection from "./Components/TimeForSection";
import Forecast from "./Components/Forecast";
import "./Styles/styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card w-50">
          <div className="card-body">
            <Header />
            <div className="search-section">
              <Search />
              <CurrentInfo />
            </div>
            <div className="visuals-section">
              <Weather />
              <TimeForSection />
            </div>
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
