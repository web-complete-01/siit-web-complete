import { useState } from 'react';

type CounterProps = { initialValue?: number; diff?: number };

export function Counter({ initialValue = 0, diff = 5 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  function handleClick(diff: number) {
    setCount(count + diff);
  }

  return (
    <>
      <h1>Counter</h1>
      <output>{count}</output>
      <div>
        <button onClick={() => handleClick(-diff)}>-{diff}</button>
        <button onClick={() => handleClick(-1)}>-</button>
        <button onClick={() => setCount(initialValue)}>Reset</button>
        <button onClick={() => handleClick(1)}>+</button>
        <button onClick={() => handleClick(diff)}>+{diff}</button>
      </div>
    </>
  );
}
