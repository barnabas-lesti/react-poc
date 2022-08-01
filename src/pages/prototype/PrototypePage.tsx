import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreInterface } from '../../store';
import { decrement, increment } from '../../store/counter';

import './PrototypePage.css';

export function PrototypePage() {
  const counterValue = useSelector((state: StoreInterface) => state.counter.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log(counterValue);
  }, [counterValue]);
  
  return (
    <div className='PrototypePage'>
      <p>Counter: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>Deposit 100</button>
      <button onClick={() => dispatch(decrement())}>Withdraw 100</button>
    </div>
  );
}
