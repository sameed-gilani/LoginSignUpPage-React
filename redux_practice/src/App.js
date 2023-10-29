import './App.css';
import Test1 from "./test1";

import {useSelector} from "react-redux";

function App() {
    const count = useSelector((state) => state.counter.count);
    console.log("PARENT RE-RENDERED")

    return (
        <div>
            <h1>Parent Component - Counter = {count}</h1>

            <Test1/>

        </div>
    );
}

export default App;
