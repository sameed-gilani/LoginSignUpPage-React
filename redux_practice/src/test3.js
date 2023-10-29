import Counter from "./counter";
import {useSelector} from "react-redux";
import React from "react";

function Test3() {
    const count = useSelector((state) => state.counter.count);
    console.log("CHILD 3 RE-RENDERED")


    return (
        <>
            <h1>Test Child component 3 - Counter = {count}</h1>
            <Counter/>
        </>
    );
}

export default React.memo(Test3)
