import "./style.scss";

const ModuleHistory = () => {
  return (
    <div className="history">
      <div className="history__header">
        <img src="images/history.svg" alt="" />
        <p>Module History</p>
      </div>
      <div className="history__content">
        <p className="history__content__task">
          Searched “Journal Entries” on Division module
        </p>
        <div className="history__content__date">
          <p>22:10 15/09/2020</p>
          <span></span>
          <p>Web</p>
        </div>
      </div>
      <div className="history__content">
        <p className="history__content__task">
          Searched “Fingerprint record” on Division module
        </p>
        <div className="history__content__date">
          <p>22:10 15/09/2020</p>
          <p>Web</p>
        </div>
      </div>
      <div className="history__content">
        <p className="history__content__task">
          Searched “Journal Entries” on Division module
        </p>
        <div className="history__content__date">
          <p>22:10 15/09/2020</p>
          <span></span>
          <p>Web</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleHistory;
