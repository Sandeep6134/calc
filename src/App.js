import React, { useReducer,useState } from 'react';
import './App.css';
import {reducer} from "./reducer"

function App() {
 
const [values1,setValues]=React.useState({
  count:0,
  num1:0,
  num2:0
})

  
  
  const [state, dispatch] = useReducer(reducer, values1);


 
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };


  return (
    <div className="App">
      <h3> Calculator  </h3>
    <form onSubmit={(e) => handleSubmit(e)}>
      Enter the value 1  <input type="text" onChange={(e)=>{setValues(state.num1=(e.target.value))}} name="num1" /><br/><br/>
      Enter the value 2<input type="text" onChange={(e)=>{setValues(state.num2=e.target.value)}} name="num2"/><br/><br/>
      <div>
      <button onClick={() => dispatch({ type: 'add',  })}>
        
        Addition +
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'sub',payload:{num1:state.num1, num2:state.num2} })}>
       
      Subtraction -
      </button>
       </div>
        <br></br>
      <div>
      <button onClick={() => dispatch({ type: 'div' })}>
        {' '}
        Division /
      </button> &nbsp;
      <button onClick={() => dispatch({ type: 'mul' })}>
        {' '}
        Multiplication * {' '}
      </button>{' '}
      </div>
      <div>
        <br></br>
      <button onClick={() => dispatch({ type: 'pow' })}>
        {' '}
       Power ^ {' '}
      </button>{' '}
      <button type="reset" onClick={() => dispatch({ type: 'reset' })}> Reset </button>{' '}
      <br /> <br /><br /> <br />
      </div>
     Output: {state.count} <br /> <br />
      &nbsp;
</form>
     
    </div>
  );
}

export default App;
