import { atom } from 'jotai';

const dataAtom = atom<number[]>([]);
const indexAtom = atom<number[]>([]);
const axisLabelsAtom = atom<string[]>([]);
const titleAtom = atom<string>('');
const variableAtom = atom<number>(0);

export { dataAtom, indexAtom, axisLabelsAtom, titleAtom, variableAtom };
