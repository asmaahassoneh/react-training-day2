import { useState } from "react";
import "../styles/App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <div>
        <button className="increment" onClick={() => setCount(prev => prev + 1)}>+</button>
        <button className="decrement" onClick={() => setCount(prev => prev - 1)}>-</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;
