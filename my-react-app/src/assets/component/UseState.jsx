import React, { useState } from 'react'

export default function UseState() {
    const [color, setColor] = useState('red');
    const [count, setCount] = useState(0);

    const mouseOver = () => {
        setColor(color === 'red' ? 'blue' : 'red');
    };

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <h1>Use State Hooks</h1>

            <p
                style={{ color: color }}
                onMouseOver={mouseOver}
            >
                Hooks are specialized JavaScript functions that allow you to use
                state and other React features (like lifecycle methods) within
                functional components instead of writing classes.
            </p>

            <div style={{ backgroundColor: "#CCC", padding: "20px" }}>
                <h2>{count}</h2>

                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}