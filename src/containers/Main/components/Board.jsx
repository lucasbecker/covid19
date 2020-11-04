import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }){
  const { cases, deaths, recovered, confirmed } = data;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />;
  
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(confirmed)} label="Confirmados" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Ativos" color="#f7bb29" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Mortes" color="#e95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Recuperados" color="#67cb87" />
      </Grid>
    </Grid>
  )
}

export default memo(Board);