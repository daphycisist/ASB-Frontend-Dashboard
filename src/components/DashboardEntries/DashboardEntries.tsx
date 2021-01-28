import "./style.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EntryCard from "../EntryCard/EntryCard";

//name, location, issues, entry, riskType

const data = [
  {
    name: "Courtney Henry",
    location: { state: "Lagos state", address: "775 Rolling Green Rd." },
    issues: 0,
    entry: { amount: 19, type: "Homogenous" },
    riskType: "low",
  },
  {
    name: "Darrell Steward",
    location: { state: "Lagos state", address: "7529 E. Pecan St." },
    issues: 2,
    entry: { amount: 10, type: "Heterogenous" },
    riskType: "mid",
  },
  {
    name: "Cody Fisher",
    location: { state: "Lagos state", address: "3605 Parker Rd." },
    issues: 0,
    entry: { amount: 8, type: "Homogenous" },
    riskType: "mid",
  },
  {
    name: "Bessie Cooper",
    location: { state: "Lagos state", address: "775 Rolling Green Rd." },
    issues: 1,
    entry: { amount: 12, type: "Heterogenous" },
    riskType: "high",
  },
  {
    name: "Annette Black",
    location: { state: "Lagos state", address: "8080 Railroad St." },
    issues: 0,
    entry: { amount: 13, type: "Heterogenous" },
    riskType: "low",
  },
  {
    name: "Jenny Wilson",
    location: { state: "Lagos state", address: "8080 Railroad St." },
    issues: 5,
    entry: { amount: 8, type: "Homogenous" },
    riskType: "high",
  },
  {
    name: "Darlene Robertson",
    location: { state: "Lagos state", address: "3890 Poplar Dr." },
    issues: 2,
    entry: { amount: 6, type: "Homogenous" },
    riskType: "mid",
  },
  {
    name: "Ralph Edwards",
    location: { state: "Lagos state", address: "8558 Green Rd." },
    issues: 0,
    entry: { amount: 14, type: "Homogenous" },
    riskType: "low",
  },
];

const DashboardEntries = () => {
  return (
    <div className="dashboardentries">
      <div className="dashboardentries__header">
        <div className="dashboardentries__header__options">
          <input type="checkbox" name="" id="" />
          <img src="images/more.svg" alt="" />
          <p>NAME</p>
        </div>
        <p>LOCATION</p>
        <p>STATUS</p>
        <p>ENTRIES</p>
        <p>RISK PROFILE</p>
        <BiDotsVerticalRounded />
      </div>
      <div className="dashboardentries__entries">
        {data.map((elem) => (
          <EntryCard
            name={elem.name}
            location={elem.location}
            issues={elem.issues}
            entry={elem.entry}
            riskType={elem.riskType}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardEntries;
