import { useState } from 'react'
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count+1)
  }

  const dec = () => {
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
}

export default App;
