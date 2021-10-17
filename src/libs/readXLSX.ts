import xlsx from 'xlsx';
import _ from 'lodash';

const readXLSX = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const wb = xlsx.read(buffer);

  const sName = wb.SheetNames[0];
  const ws = wb.Sheets[sName];

  const data: { [key: string]: any }[] = xlsx.utils.sheet_to_json(ws);
  const result: number[][] = data.map((obj) => _.toArray(obj));

  const axisLabels = Object.keys(data[0]);

  return { title: file.name, data: result, labels: axisLabels };
};

export { readXLSX };
