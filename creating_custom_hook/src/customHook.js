import {useState, useRef, useEffect} from "react";



// export default function useTurnInputFieldsRed(props){
//
//     const [color, setColor] = useState("black")
//     const fieldRef = useRef(props.field);
//
//
//
//     const onClickHandler = ()=>{
//
//     }
//
//     useEffect(() => {
//
//     }, []);
//
// }

export function useCounter(props){

    const counter = useRef(0);

    const next = ()=>{
        return counter.current += 1
    }
    const reset = ()=>{
        return counter.current = 0
    }

    return [counter, next, reset]

}

