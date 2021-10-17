import * as React from 'react';
import Diagram from 'react-chartjs-2';
import { standardDeviation } from 'simple-statistics';

import { useAtomValue } from 'jotai/utils';
import { axisLabelsAtom, titleAtom } from '../store';

const Chart = (props: { datasets: number[]; index: number[] }) => {
  const title = useAtomValue(titleAtom);

  const axisLabels = useAtomValue(axisLabelsAtom);

  const data = {
    labels: props.index,
    datasets: [
      {
        label: axisLabels[1],
        data: props.datasets,
        borderColor: '#dc3dc455',
      },
      {
        label: 'Standar Deviasi Tertinggi',
        data: props.datasets.map(
          (value: number) => value + standardDeviation(props.datasets)
        ),
        fill: '+1',
        backgroundColor: '#f7dfca55',
        borderColor: '#dccfc455',
      },
      {
        label: 'Standar Deviasi Terendah',
        data: props.datasets.map(
          (value: number) => value - standardDeviation(props.datasets)
        ),
        borderColor: '#dccfc455',
        backgroundColor: '#f7dfca55',
      },
    ],
  };

  const options = {
    plugins: {
      title: { display: true, text: title },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: axisLabels[0],
        },
      },
      y: {
        title: {
          display: true,
          text: axisLabels[1],
        },
        min: 0,
      },
    },
  };

  return (
    <div className="container">
      <Diagram type="line" data={data} options={options} />
    </div>
  );
};

export { Chart };
