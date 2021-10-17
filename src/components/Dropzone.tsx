import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { readXLSX } from '@libs/readXLSX';
import { useUpdateAtom } from 'jotai/utils';

import dropzone from '@styles/dropzone.module.css';
import { dataAtom, indexAtom, axisLabelsAtom, titleAtom } from '../store';

const Dropzone = () => {
  const setData = useUpdateAtom(dataAtom);
  const setIndex = useUpdateAtom(indexAtom);
  const setAxisLabels = useUpdateAtom(axisLabelsAtom);
  const setTitle = useUpdateAtom(titleAtom);

  const onDrop = React.useCallback(async (files) => {
    const result = await readXLSX(files[0]);

    const data = result.data.map((value) => value[1]);
    const index = result.data.map((value) => value[0]);

    setData(data);
    setIndex(index);
    setAxisLabels(result.labels);
    setTitle(result.title);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container">
      <div {...getRootProps({ className: dropzone.area })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Jatuhkan file disini.</p>
        ) : (
          <p>
            Jatuhkan file .xls, .xlsx, atau .ods disini, atau klik untuk memilih
            file.
          </p>
        )}
      </div>
    </div>
  );
};

export { Dropzone };
