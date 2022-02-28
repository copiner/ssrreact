/*
  counter
*/

/*

import React, { useState } from 'react';

function Counter(props) {
    console.log(props)
    const [count, setCount] = useState(0);

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    );
}

export default Counter;
*/

import React from 'react';
import useCounter from './hook/useCounter'

function Counter() {
  // 调用自定义 Hook
  const { count, increment, decrement, reset } = useCounter();

  // 渲染 UI
  return (
    <div>
      <button onClick={decrement}> - </button>
      <span> { count } </span>
      <button onClick={increment}> + </button>
      <button onClick={reset}> reset </button>
    </div>
  );
}

export default Counter;
