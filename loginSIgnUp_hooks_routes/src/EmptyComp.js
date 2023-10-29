import React, { useState, useEffect } from 'react';


export default function Empty(props) {

    const [name, setName] = useState('Empty');
    const [email, setEmail] = useState('Empty');

    console.log("NEW COMP")

    useEffect(()=>{
        console.log("NEW NO DEPENDACI")

    },[])

    useEffect(()=>{
        console.log("NEW EMPTY VALA")

    },)

    useEffect(() => {
        console.log("NEW USE EFFECT -> " +name)

    },[name]);

    useEffect(() => {
        console.log("NEW USE EFFECT -> " +email)

    },[email]);

    useEffect(() => {
        return () => {
            console.log("NEW This is unmounted");
        };
    }, []);


    let count = 0;

    return(
        <div>

            <h1>HERE</h1>


        </div>
    );


}

