import React from 'react'

import Header from '../shared/Header';
import ResultComponent from './resultComponent';
import EstimateCardsComponent from './estimateCardsComponent';

function EstimateComponent(props) {
  console.log(props.match.params.name)
  return (
    <div>
      <Header room={props.match.params.id} name={props.match.params.name}/>
      <EstimateCardsComponent />
      <ResultComponent />
    </div>
  )
}

export default EstimateComponent
