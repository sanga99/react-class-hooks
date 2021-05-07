import React, { useState, useRef } from "react"
import Hooks2 from './hooks2';

const CounterHooks = () => {
    const [count, setCount] = useState(0);
    const elRef = useRef(null);

    const onPlus = () => {
        setCount(count +1);
    };

    const onMinus = () => {
        setCount(count -1);
    };

    return (
        <div>
            <h1>React Hooks</h1>
            <strong>{count}</strong>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <Hooks2 ref={elRef}/>
        </div>
    )

}

export default CounterHooks;