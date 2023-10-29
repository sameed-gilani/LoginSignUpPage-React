import {useCallback, useRef, useState} from 'react';
import {Child} from "./childComp";
import ChildWithCallBack from "./childComp";

export default function UsingCallback(){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)



    const callBackFunc = useCallback(() => {

    }, []);

    const func = ()=>{

    }


    return(
        <div>

            <button onClick={()=>{
                setA(a+1)
            }}> INC A</button>

            <button onClick={()=>{
                setB(b+1)
            }}> INC B</button>

            <ChildWithCallBack callback={callBackFunc} a={a}/>
            <Child callbackFunc={func} a={a}/>



        </div>

    );
}


