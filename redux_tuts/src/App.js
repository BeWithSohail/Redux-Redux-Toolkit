import React from 'react';
import "./style.css";
import { incNumber, decNumber } from './actions';
import { useSelector, useDispatch } from "react-redux";
const App = () => {
    const myState = useSelector((state) => state.changetheNumber)
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(incNumber()); // Dispatch the incNumber action
    };

    const decrement = () => {
        dispatch(decNumber()); // Dispatch the decNumber action
    };
  return (
      <>    
          <div className='container'>
              <h1> Incremenet Decrement Counter</h1> 
              <h4> Using React and Redux </h4>
              <div className='quantity'> 
                <button onClick={decrement}> - </button>
                <input type="text" className='quantity'  value={myState} />
                <button onClick={increment}> + </button>
                </div>
            </div>
      </>
  )
}

export default App;