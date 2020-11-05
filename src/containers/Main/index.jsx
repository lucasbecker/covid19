import React, { memo, useCallback, useEffect, useState } from 'react';
import Api  from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main(){
  const [data, setData] = useState({});
  const [state, setState] = useState('brazil');
  const updateAt = data.datetime || data.updated_at;
  
  let updateDate = new Date(updateAt).toLocaleDateString();

  const getCovidData = useCallback( state => {
    
    
      if(state === 'brazil'){
        Api.getData(state)
        .then(response => setData(response.data));
      }else{
        Api.getData(state)
        .then(response => setData(response));
      }
    

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
          updateAt={updateDate}
          onChange={handleChange}
          state={state}
        />
      </div>
      <Board data={data}></Board>
      <div className='pt-2 footer'>
        <a className="cursor" target="_blank" rel="noopener noreferrer" href="https://github.com/lucasbecker/covid19-brazil">GitHub</a> | <a className="cursor" target="_blank" rel="noopener noreferrer" href="https://covid19-brazil-api.now.sh/">Covid19 Brazil API</a>

      </div>
    </ContainerStyled>
  );
}

export default memo(Main);