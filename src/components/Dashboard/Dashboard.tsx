import React from "react";
import TrackerCard from "../TrackerCard/TrackerCard";
import "./style.scss";
import trackerData from "../../tracker.json";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__nav">
        <p>Divisions</p>
        <img src="images/caret-right.svg" alt="" />
        <p>Module</p>
      </div>
      <div className="dashboard__trackers">
        {trackerData.map(({ value, text }) => (
          <TrackerCard value={value} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
