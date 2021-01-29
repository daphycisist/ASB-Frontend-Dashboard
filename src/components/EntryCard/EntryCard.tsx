import React, { useState, useEffect, ChangeEvent } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiArrowDownRight, FiArrowRight, FiArrowUp } from "react-icons/fi";
import "./style.scss";

export type IEntry = {
  onChange?: any;
  pos?: number;
  name: string;
  id: number;
  location: { state: string; address: string };
  issues: number;
  entry: { amount: number; type: string };
  riskType: string;
  checked?: boolean;
  globalsta: any;
  setGlobal: any;
  
};

const EntryCard = ({
  pos,
  name,
  location,
  id,
  issues,
  entry,
  riskType,
  checked,
  globalsta,
  setGlobal
}: IEntry) => {
  const [ischecked, setIsChecked] = useState(checked);

  useEffect(() => {
   
  }, [checked])

  // const handleCheck = (e: React.FormEvent<HTMLInputElement>) => {
  //   //  const { name } = e.target;
  //   console.log(e.target);
  // };

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    // const item = e.currentTarget.name
    const data = globalsta.map((item:any) => {
      if (item.id === id) {
        item.val = !item.val
      }
      return item;
    })
    setGlobal(data)
    setIsChecked(!ischecked)
  } 

  return (
    <div className="entrycard">
      <div className="entrycard__options">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          value={pos}
        />
        <img src="images/more.svg" alt="" />
        <div className="entrycard__options__name">{name}</div>
      </div>
      <div className="entrycard__location">
        <p>{location.state}</p>
        <p>{location.address}</p>
      </div>
      <div className={`${issues ? "orange" : "blue"} entrycard__status`}>
        <p>{issues ? `${issues} Issues found` : "No Issues"}</p>
      </div>
      <div className="entrycard__entry">
        <p>{`${entry.amount} Unique Entries`}</p>
        <p>{entry.type}</p>
      </div>
      <div className={`entrycard__risk ${riskType}`}>
        {riskType === "low" ? (
          <>
            <FiArrowDownRight />
            <span>Low Risk</span>
          </>
        ) : riskType === "mid" ? (
          <>
            <FiArrowRight />
            <span>Mid Risk</span>
          </>
        ) : (
          <>
            <FiArrowUp />
            <span>High Risk</span>
          </>
        )}
      </div>
      <div className="entrycard__dots">
        <BiDotsVerticalRounded size="20px" />
      </div>
    </div>
  );
};

export default EntryCard;
