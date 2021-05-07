import React from 'react';
import ReactDOM from 'react-dom';

import CounterClass from "./Counter_class";
import CounterHooks from "./Counter_hooks";

function App() {
  return (
    <div className="App">
            <CounterClass/>
            <CounterHooks/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)
