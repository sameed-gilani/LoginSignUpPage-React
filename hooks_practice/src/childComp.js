import React from "react";

let x = 10
export function ChildWithCallBack(props){

    return(
        <div>
            <h1>(CALLBACK) CHILD BEEN RENDERED => a = {props.a} x = {++x}</h1>

        </div>
    )
}

export function Child(props){

    return(
        <div>
            <h1>CHILD BEEN RENDERED => a = {props.a} x = {++x}</h1>
        </div>
    )
}

export default React.memo(ChildWithCallBack)