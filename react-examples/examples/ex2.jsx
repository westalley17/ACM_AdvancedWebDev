// 2. useState Example (Counter)
import { useState } from "react";

export default function Example2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}