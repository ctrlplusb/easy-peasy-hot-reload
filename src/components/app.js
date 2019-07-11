import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function App() {
  const title = useStoreState(state => state.title);
  const counter = useStoreState(state => state.counter);
  const inc = useStoreActions(actions => actions.inc);
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{counter}</h2>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
