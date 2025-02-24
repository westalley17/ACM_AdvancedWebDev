import { useState } from "react";
// 4. Componentization & Props
function Button({ onClick, text }) {
    let btnColor = "btn btn-danger";
    if (text === "Increment") {
        btnColor = "btn btn-primary"
    }
    return <button className={btnColor} onClick={onClick}>{text}</button>;
}

export default function Example4() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <Button onClick={increment} text="Increment" />
            <Button onClick={decrement} text="Decrement" />
        </div>
    );
}