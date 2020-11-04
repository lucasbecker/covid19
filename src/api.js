const path = 'https://covid19-brazil-api.now.sh/api/report/v1/';

const header = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country){
  return fetch(`${path}${country}`, header)
    .then( response => response.json() )
}

export default {
  getCountry
}