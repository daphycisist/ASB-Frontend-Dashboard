import { Link } from "react-router-dom";
import "./style.scss";

const DivisionSummary = () => {
  return (
    <div className="summary">
      <div className="summary__header">
        <img src="images/castle.svg" alt="" />
        <p>Division Summary</p>
      </div>
      <div className="summary__content">
        <img src="images/phone.svg" alt="" />
        <Link to="">0801 234 5678</Link>
      </div>
      <div className="summary__content">
        <img src="images/mail.svg" alt="" />
        <Link to="">asbfefr@gmail.com</Link>
      </div>
      <div className="summary__content">
        <img src="images/location.svg" alt="" />
        <Link to="">Mojidi, Lagos</Link>
      </div>
      <div className="summary__content">
        <img src="images/journal.svg" alt="" />
        <Link to="">2 Journal entries</Link>
      </div>
      <div className="summary__content">
        <img src="images/fingerprint.svg" alt="" />
        <Link to="">24 fingerprints enrolled</Link>
      </div>
    </div>
  );
};

export default DivisionSummary;
