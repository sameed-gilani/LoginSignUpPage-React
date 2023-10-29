import React, {useState, useRef} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

export default function LoggingIn(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [database, setDatabase] = useState(localStorage.getItem('localDB'))

    const navigate = useNavigate();



    function handleSubmit(event){
        event.preventDefault()
        manageLogin(email,password,database);
    }

    function manageLogin(loginEmail,loginPass,database){

        let flag = false;
        const databaseParsed = JSON.parse(database)

        // Checks the validity of the email and password with each object in the database
        let matchedObj = databaseParsed.filter(obj => obj.email === loginEmail && obj.password === loginPass);
        console.log(matchedObj)

        if(matchedObj.length === 1){
            flag = true
        }

        // Async calls
        if(flag === true){

            alert("Logged In!");
            localStorage.setItem('loginToken',JSON.stringify(true))
            navigate('/userManagement');

        } else{

            alert("Wrong password or email !");
        }
    }


    return (
        <>
        <form onSubmit={handleSubmit}>

            <label>Email:</label>
            <input value={email} name="Email" onChange={(event)=>{
                setEmail(event.target.value)
            }}/>

            <label>Password:</label>
            <input value={password} name="Password" onChange={(event)=>{
                setPassword(event.target.value)
            }}/>

            <button type="submit">Submit</button>

            <button onClick={()=>{
                navigate('/signupPage');
            }}>Go to Sign up</button>

        </form>
            <Outlet/>
        </>
    );


}