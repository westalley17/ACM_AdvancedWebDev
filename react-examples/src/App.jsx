import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import Example1 from "../examples/ex1";
import Example2 from "../examples/ex2";
import Example3 from "../examples/ex3";
import Example4 from "../examples/ex4";

export default function App() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <div className="card-body text-center">
                    <Example1 />
                </div>
            </div>
        </div>
    );
}