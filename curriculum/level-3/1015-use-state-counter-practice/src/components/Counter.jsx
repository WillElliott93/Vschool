import { useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0)

    function incrementNumber(num) {
        setNumber(number => {
            const newNumber = number + num
            return newNumber
        })
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={() => incrementNumber(1)}>Increment</button>
            <button onClick={() => incrementNumber(-1)}>Decrement</button>
        </div>
    )
}