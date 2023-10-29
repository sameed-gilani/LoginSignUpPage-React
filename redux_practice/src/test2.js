import {useSelector} from "react-redux";
import Test3 from "./test3";
import React from "react";

function Test2(){
    // const count = useSelector((state) => state.counter.count);
    const count = 10
    console.log("CHILD 2 RE-RENDERED")


    return(
        <>
            <h1>Test Child component 2 - Counter = {count}</h1>
            <Test3/>
        </>
    );
}

export default React.memo(Test2)