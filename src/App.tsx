import React from 'react';
import {MyForm} from './components/form/Form'

const App = () => {
  return <div style={{textAlign: "center"}}><MyForm onSubmit={({marketCap, freeCashFlow, expectedReturn, currentPrice})=>{
    console.log(marketCap + " " + freeCashFlow + " " + expectedReturn + " " + currentPrice)
  }}/></div>;
};

export default App;
