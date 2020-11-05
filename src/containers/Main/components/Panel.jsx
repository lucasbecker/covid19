import React, {memo} from 'react';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import STATES from '../../../commons/constants/states';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigatiorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, state }) {
  const { cases, deaths } = data;
  
  const renderCountries = (item, index) => (
    <MenuItem key={`state-${index}`} value={item.value} >
      <ItemStyled>
        <div>{item.label}</div>
        <img src={item.flag} alt={`Bandeira ${item.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  // ARRUMAR TEXTO
  const textCovid19 = `${state}, ${cases}, ${deaths}`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${state}`,
      text: textCovid19,
      url: 'http://covid19-brazil.vercel.app'
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar Dados
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h4" component="h1">COVID-19 Brasil</Typography>
          <Typography variant="h6" component="p">Dados do Covid-19 no Brasil e estados brasileiros.</Typography>
          <Typography variant="body1" component="span">Atualizado em: {updateAt}</Typography>
          
          <div className="pt-2">
            <Select onChange={onChange} value={state} >
              {STATES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatiorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);