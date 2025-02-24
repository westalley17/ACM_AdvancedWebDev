// 3. useEffect Example (API Fetching)
import { useState, useEffect } from "react";

export default function Example3() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div>
            <h2>Fetched Data:</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}