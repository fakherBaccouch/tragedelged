import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sizing } from '@material-ui/system';

export default function CircularUnderLoad() {
  return <CircularProgress color="black" disableShrink />;
}