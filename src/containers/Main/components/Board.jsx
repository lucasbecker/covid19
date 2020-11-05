import React, {memo} from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }){
  const { cases, deaths } = data;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />;
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(cases)} label="Casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(deaths)} label="Mortes" color="#e95078" />
      </Grid>
     
    </Grid>
  )
}

export default memo(Board);