import React, { useState, useRef } from "react"

const CounterHooks = () => {
    const [count, setCount] = useState(0);

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
        </div>
    )

}

export default CounterHooks;