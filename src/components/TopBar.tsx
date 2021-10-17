import * as React from 'react';
import styles from '@styles/topbar.module.css';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { dataAtom, variableAtom } from '../store';

const TopBar = () => {
  const dataForDatasets = useAtomValue(dataAtom);
  const setVariable = useUpdateAtom(variableAtom);
  const [input, setInput] = React.useState<string>(
    dataForDatasets.length.toString()
  );

  const handleClick = () => {
    setVariable(parseInt(input));
  };
  return (
    <div className={styles.bar}>
      <div>Statistika UNUGHA</div>
      <div className={styles.form}>
        <span>Panjang Data perDiagram</span>
        <input
          value={input}
          onChange={(evt) => {
            setInput(evt.target.value);
          }}
        />
        <button onClick={handleClick}>Ubah</button>
      </div>
    </div>
  );
};

export { TopBar };
