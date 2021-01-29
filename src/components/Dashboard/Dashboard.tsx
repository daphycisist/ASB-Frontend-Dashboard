import React from "react";
import TrackerCard from "../TrackerCard/TrackerCard";
import "./style.scss";
import trackerData from "../../tracker.json";
import DivisionSummary from "../DivisionSummary/DivisionSummary";
import ModuleHistory from "../ModuleHistory/ModuleHistory";
import DashboardEntries from "../DashboardEntries/DashboardEntries";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__nav">
        <p>Divisions</p>
        <img src="images/caret-right.svg" alt="" />
        <p>Module</p>
      </div>
      <div className="dashboard__trackers">
        {trackerData.map(({id, value, text }) => (
          <TrackerCard key={id} value={value} text={text} />
        ))}
      </div>

      <div className="dashboard__content">
        <div className="dashboard__content__left">
          <DivisionSummary />
          <ModuleHistory />
        </div>
        <div className="dashboard__content__right">
          <DashboardEntries />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
