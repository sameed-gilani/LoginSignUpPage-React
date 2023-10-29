import {useSelector, useDispatch} from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from "./CounterSlice";

import {useState} from "react";

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => {
                    dispatch(increment())
                }}>+
                </button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>-
                </button>
                <button onClick={() => {
                    dispatch(reset())
                }}>reset
                </button>

                <input value={incrementAmount} onChange={(event) => {
                    setIncrementAmount((event.target.value))
                }}/>
                <button onClick={() => {
                    dispatch(incrementByAmount(Number(incrementAmount)))
                }}>Set
                </button>


            </div>
        </section>
    );
}


export default Counter