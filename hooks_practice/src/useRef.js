import { useRef, useState } from "react"

export default function UsingRef(props){

    const counterRef = useRef(10);
    let counterRefLess = 5;

    const [update, setUpdate] = useState(false);



    return(
        <div>
            <button onClick={()=>{
                console.log("useRef counter = " + ++counterRef.current);
            }}>Increment counter Reffed = {counterRef.current}</button>

            <button onClick={()=>{
                console.log("normal counter = " + ++counterRefLess);
            }}>Increment counter Un-Reffed  = {counterRefLess}</button>

            <button onClick={()=>{
                setUpdate(!update);

                console.log("Before re-rendering: ")
                console.log("useRef counter = " + counterRef.current);
                console.log("normal counter = " + counterRefLess);


            }}>Re-render / ref = { counterRef.current} unref = {counterRefLess} </button>
        </div>
    );




}