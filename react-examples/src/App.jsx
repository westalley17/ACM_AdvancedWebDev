import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import Example1 from "../examples/ex1";
import Example2 from "../examples/ex2";
import Example3 from "../examples/ex3";
import Example4 from "../examples/ex4";
import { useState } from 'react';

export default function App() {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if (page < 4)
            setPage(page + 1)
    }
    const previousPage = () => {
        if (page > 1)
            setPage(page - 1)
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <div className="card-body text-center">
                    {page == 1 && <Example1 />}
                    {page == 2 && <Example2 />}
                    {page == 3 && <Example3 />}
                    {page == 4 && <Example4 />}
                </div>
                <div className="row d-flex">
                    <button className="btn btn-secondary col-6" onClick={previousPage}>Previous Example</button>
                    <button className="btn btn-info col-6" onClick={nextPage}>Next Example</button>
                </div>
            </div>
        </div>
    );
}