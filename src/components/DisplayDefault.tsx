import * as React from 'react';
import _ from 'lodash';
import { useAtomValue } from 'jotai/utils';

import { Chart } from '@components/Chart';
import { dataAtom, indexAtom, variableAtom } from '@/store';
import { Calculation } from '@components/Calculation';

const DisplayDefault = () => {
  const dataForDatasets = useAtomValue(dataAtom);
  const storeVariable = useAtomValue(variableAtom);
  const labels = useAtomValue(indexAtom);

  const variable = storeVariable != 0 ? storeVariable : dataForDatasets.length;
  const datasets = dataForDatasets ? _.chunk(dataForDatasets, variable) : [];
  const axisLabels = labels ? _.chunk(labels, variable) : [];

  if (dataForDatasets.length > 0)
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {datasets.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                width:
                  storeVariable != 0 && storeVariable < dataForDatasets.length
                    ? '50%'
                    : '100%',
              }}
            >
              <Chart datasets={data} index={axisLabels[index]} />
              <Calculation datasets={data} />
            </div>
          );
        })}
      </div>
    );
  else return null;
};

export { DisplayDefault };
