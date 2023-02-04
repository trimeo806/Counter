import React, {useState} from 'react'
import "./App.css"
function App() {
  const [value, setValue] = useState(0);
  const increase = () =>{
    setValue(value+1);
  }
  const decrease = () =>{
    setValue(value-1);
  }
  const reset = () =>{
    setValue(0);
  }
  let valueColor;
    if(value>0){valueColor = "green";}
    if(value<0){valueColor = "red";}
    if(value===0){valueColor = "black";}
  return (
    <div className='container'>
      <h1>Counter</h1>
      <span id='value' style = {{color: valueColor}}>{value}</span>
      <div className='btn-group'>
        <button className='btn btn-decrease' onClick={decrease}>DECREASE</button>
        <button className='btn btn-reset' onClick={reset}>RESET</button>
        <button className='btn btn-increase' onClick={increase}>INCREASE</button>
      </div>
    </div>
  )
}

export default App