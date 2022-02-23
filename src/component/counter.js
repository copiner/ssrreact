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
