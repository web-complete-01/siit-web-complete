import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Counter</h1>
      <output>{ count }</output>
      <div>
        <button onClick={ () => setCount(count - 1) }>-</button>
        <button>+</button>
      </div>
    </>
  )
}
