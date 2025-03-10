import React, { useMemo, useState } from 'react'
import useCustomMemo from '../customHooks/useCustomMemo';

const IncDec = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log("Expensive Calculation..");
        return counter * counter;
    }
    console.log('hello')

    // const memoisedSquaredValue = useMemo(squaredValue, [counter]); // using useMemo of react
    const memoisedSquaredValue = useCustomMemo(squaredValue, [counter]); //using custom useMemo
    
  return (
    <div>
        <h2>Counter: {counter}</h2>
        <h2>Squared Counter: {memoisedSquaredValue}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <h2>Counter 2: {counter2}</h2>
        <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  )
}

export default IncDec