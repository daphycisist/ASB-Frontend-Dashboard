import { FiInfo } from "react-icons/fi";
import "./style.scss";

type ITracker = {
  value: number;
  text: string;
}

const TrackerCard = ({ value, text }: ITracker) => {
  return (
    <div className="tracker">
      <div className="tracker__record">
        <h1>{value}</h1>
        <FiInfo />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TrackerCard;

//  #EDF6FF
