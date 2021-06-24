import React, { useEffect, useState } from 'react'

import Header from '../shared/Header';
import ResultComponent from './resultComponent';
import EstimateCardsComponent from './estimateCardsComponent';

function EstimateComponent(props) {

  const [fibSeq, setFibSeq] = useState([])
  var fib = [];
  const fibonacci = () => {
    var i;

    // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= 10; i++) {
      // Next fibonacci number = previous + one before previous
      fib[i] = fib[i - 2] + fib[i - 1];
      console.log(fib[i]);
    }

    var unique = fib.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
  }
  
  useEffect(() => {
    let newArr = fibonacci();
    console.log(fibonacci())
    setFibSeq(newArr)
  }, [])

  console.log(props.match.params.name)
  return (
    <div>
      <Header room={props.match.params.id} name={props.match.params.name} />
      <EstimateCardsComponent storyArr={fibSeq} />
      <hr/>
      <ResultComponent />
    </div>
  )
}

export default EstimateComponent
