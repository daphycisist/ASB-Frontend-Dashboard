import "./style.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EntryCard from "../EntryCard/EntryCard";
import data from "../../entries.json";
import { useState } from "react";

const DashboardEntries = () => {
  const [ischecked, setIsChecked] = useState(false);
  const [globalsta, globalState] = useState(data)

  const onChange = () => {
    setIsChecked(!ischecked)
    let all = globalsta.map((item) => {
      item.val = !ischecked === true ? (item.val = true) : item.val = false
      return item
    })
    globalState([...all])
  }

  return (
    <div className="dashboardentries">
      <div className="dashboardentries__header">
        <div className="dashboardentries__header__options">
          <input type="checkbox" name="" id="" checked={ischecked} onChange={ onChange}/>
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
            key={elem.id}
            name={elem.name}
            id={elem.id}
            location={elem.location}
            issues={elem.issues}
            entry={elem.entry}
            riskType={elem.riskType}
            // onChange={handleCheck}
            checked={elem.val}
            globalsta={globalsta}
            setGlobal={globalState}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardEntries;
