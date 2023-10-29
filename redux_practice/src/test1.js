import Test2 from "./test2";
import {useSelector} from "react-redux";
import React from "react";


function Test1() {
    const count = useSelector((state) => state.counter.count);

    console.log("CHILD 1 RE-RENDERED")

    return (
        <>
            <h1>Test Child component 1 - Counter = {count}</h1>
            <Test2/>
        </>


    );
}


export default React.memo(Test1)
