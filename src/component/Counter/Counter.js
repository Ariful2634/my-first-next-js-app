"use client"

// =>  this is use to do client side work

import { useState } from "react";



const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-success">Increase</button>
            <button onClick={() => setCounter(counter - 1)} className="btn btn-primary">Decrease</button>
        </div>
    );
};

export default Counter;