import { useCallback, useState } from 'react';

export default function UsingCallback(){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [update, setUpdate] = useState(true)


    const Addition = useCallback(() => {
        console.log(a + b);
        return a+b

    }, [a,b]);

    function AdditionNoCallback(a,b){
        console.log(a+b)
        return a+b
    }

    let t1 = AdditionNoCallback
    let t11 = Addition


    return(
        <div>
            <button onClick={()=>{
                setA((value)=>{
                    console.log("A: ")
                    console.log(value + 1)
                    return value + 1
                })
            }}> INC A</button>

            <button onClick={()=>{
                setB((value)=>{
                    console.log("B: ")
                    console.log( value + 1)
                    return value + 1
                })
            }}> INC B</button>

            <button onClick={()=>{

                setUpdate(!update)
                let t2 = AdditionNoCallback
                let t22 = Addition
                setUpdate(!update)
                console.log(t1===t2)
                console.log(t11 === t22)



            }}> Check Function</button>
        </div>

    );
}

