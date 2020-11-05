const path = 'https://covid19-brazil-api.now.sh/api/report/v1/';

const header = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}


function getData(state){
  if(state === 'brazil'){
    return fetch(`${path}${state}`, header)
    .then( response => response.json() );
  }
  
  return fetch(`${path}brazil/uf/${state}`, header)
    .then( response => response.json() );
}

export default {
  getData
}