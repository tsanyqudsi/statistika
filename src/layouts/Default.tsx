import * as React from 'react';
import { Dropzone } from '@components/Dropzone';
import { DisplayDefault } from '../components/DisplayDefault';
import { TopBar } from '../components/TopBar';

const Default = () => {
  return (
    <>
      <TopBar />
      <Dropzone />
      <DisplayDefault />
    </>
  );
};

export { Default };
