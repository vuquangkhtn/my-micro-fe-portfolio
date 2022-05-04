import { generateMonths } from 'utils/date';

type HistoryListProps = {
  histories: Array<History>
};
const HistoryList = ({ histories }: HistoryListProps) => {
  return (
    <div className="timeline">
      {histories.map(history => (
        <div key={history.id} className="timeline-wrapper">
          <div className="timeline-yr">
            <span>{generateMonths(history.time, history.nextTime?.time)}</span>
          </div>
          <div className="timeline-info">
            <h3><span />{history.name}<small>{history.company}</small></h3>
            <p>{`From ${history.time} to ${history.nextTime?.time || 'Present'}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


type HistoryProps = {
  histories: Array<History>
};
const Histories = ({ histories }: HistoryProps) => {
  if (!histories || histories.length === 0) return null;

  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="history">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-4">Histories</h2>
            <HistoryList histories={histories} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Histories;
