import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const counterUp=()=>{
    setCounter(counter+1)
  }
  return (
  <div>
  <h1>{counter}</h1>  
  <button onClick={counterUp}>Change counter</button>
  </div>
  )
}

export default Counter;
