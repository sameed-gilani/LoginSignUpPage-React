import { useState, useMemo } from "react"


export default function UsingMemo (props){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)



    const bigCalc = useMemo(() => {
        console.log("Performing A ",a)
        console.log("Performing B ",b)

    }, [a,b]);



    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            {bigCalc}

            <button onClick={()=>{
                setA((value)=>{
                    return value + 1
                })
            }}>INC A</button>
            <button onClick={()=>{
                setA((value)=>{
                    return value
                })
            }}>KEEP A</button>
            <h1>A: {a}</h1>

            <button onClick={()=>{
                setB((value)=>{
                    return value + 1
                })
            }}> INC B</button>
            <button onClick={()=>{
                setB((value)=>{
                    return value
                })
            }}>KEEP B</button>
            <h1>B: {b}</h1>

            <button onClick={()=>{
                setC((value)=>{
                    return value + 1
                })
            }}> INC C</button>
            <button onClick={()=>{
                setC((value)=>{
                    return value
                })
            }}>KEEP C</button>
            <h1>C: {c}</h1>

        </form>
    );

}


