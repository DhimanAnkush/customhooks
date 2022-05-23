import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCounter } from './Components/useCounter';
import { useList } from './Components/useList';

function App() {

  const [count, inc, dec, set] = useCounter(0);
  const [list, { push, pop, clear, reset, map }] = useList()

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={() => inc()}>Increment</button>
      <button onClick={() => dec()}>Decrement</button>
      <button onClick={() => set()}>Reset</button>
      <div>
        <h1>List : {list}</h1>
        <button onClick={() => push(10)}>Push</button>
        <button onClick={() => pop()}>POP</button>
        <button onClick={() => clear()}>CLEAR</button>
        <button onClick={() => map()}>MAP</button>
        <button onClick={() => reset()}>RESET</button>
      </div>
    </div>
  );
}

export default App;
