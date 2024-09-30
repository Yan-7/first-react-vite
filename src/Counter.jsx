import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    function raiseNum() {
        setCount(count + 1);
    }
    return(
        <div>
            <p>num is - {count}</p>
            <button onClick={raiseNum}>increment</button>
        </div>
    )
}