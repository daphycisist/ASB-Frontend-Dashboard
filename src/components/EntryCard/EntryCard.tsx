import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./style.scss";

export type IEntry = {
  name: string;
  location: { state: string; address: string };
  issues: number;
  entry: { amount: number; type: string };
  riskType: string;
};

const EntryCard = ({ name, location, issues, entry, riskType }: IEntry) => {
  return (
    <div className="entrycard">
      <div className="entrycard__options">
        <input type="checkbox" name="" id="" />
        <img src="images/more.svg" alt="" />
        <div className="entrycard__options__name">{name}</div>
      </div>
      <div className="entrycard__location">
        <p>{location.state}</p>
        <p>{location.address}</p>
      </div>
      <div className={`${issues ? "orange" : "blue" } entrycard__status`}>
        <p>{issues ? `${issues} Issues found` : "No Issues"}</p>
      </div>
      <div className="entrycard__entry">
        <p>{`${entry.amount} Unique Entries`}</p>
        <p>{entry.type}</p>
      </div>
      <div className="entrycard__risk">
        {riskType === "low"
          ? "Low Risk"
          : riskType === "mid"
          ? "Mid Risk"
          : "High Risk"}
      </div>
      <div className="entrycard__dots">
        <BiDotsVerticalRounded size="20px" />
      </div>
    </div>
  );
};

export default EntryCard;
