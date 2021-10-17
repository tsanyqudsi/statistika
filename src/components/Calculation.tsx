import { standardDeviation, variance } from 'simple-statistics';

const Calculation = (props: { datasets: number[] }) => {
  return (
    <div className="container">
      <div>
        <span className="keys">Standar Deviasi : </span>
        {standardDeviation(props.datasets).toFixed(3)}
      </div>
      <div>
        <span className="keys">Varian : </span>{' '}
        {variance(props.datasets).toFixed(3)}
      </div>
    </div>
  );
};

export { Calculation };
