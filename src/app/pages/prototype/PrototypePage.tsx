import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PrototypePage.css';

import { StateInterface } from '../../store';
import { decrement, increment } from '../../store/counter';

export function PrototypePage() {
  const count = useSelector((state: StateInterface) => state.counter.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log(count);
  }, [count]);
  
  return (
    <div className='PrototypePage'>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
