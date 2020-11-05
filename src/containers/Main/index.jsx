import React, { memo, useCallback, useEffect, useState } from 'react';
import Api  from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main(){
  const [data, setData] = useState({});
  const [state, setState] = useState('sp');
  const updateAt = data.datetime;

  

  const getCovidData = useCallback( state => {
    Api.getCountryState('brazil', state)
      .then(response => setData(response));
  }, []);

  useEffect( () => {
    getCovidData(state)
  } , [getCovidData, state])

  const handleChange = ({ target }) => {
    const state = target.value;
    setState(state);
  }
  
  return (
    <ContainerStyled>
      <div className='mb-2'>
        <Panel
          data={data} 
          updateAt={updateAt}
          onChange={handleChange}
          country={state}
        />
      </div>
      <Board data={data}></Board>
    </ContainerStyled>
  );
}

export default memo(Main);