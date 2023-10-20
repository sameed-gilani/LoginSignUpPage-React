import {useState} from 'react';
import UserManagement from "./ManageUsers";

export default function LoggingIn(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentView, setCurrentView] = useState('Login')
    const [database, setDatabase] = useState(localStorage.getItem('localDB'))

    function handleChangeEmail(event){
        setEmail(event.target.value)
    }

    function handleChangePassword(event){
        setPassword(event.target.value)
    }

    function handleChangeView(){
        setCurrentView('ManageUsers')
    }

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
            handleChangeView()
        }
        else{

            alert("Wrong password or email !");
        }
    }



    if(currentView === 'Login'){
        return (

            <form onSubmit={handleSubmit}>

                <label>Email:</label>
                <input value={email} name="Email" onChange={handleChangeEmail}/>

                <label>Password:</label>
                <input value={password} name="Password" onChange={handleChangePassword}/>

                <button type="submit">Submit</button>
            </form>
        );
    }
    else if(currentView === 'ManageUsers'){
        return(
            <div>
                <UserManagement/>
            </div>
        );
    }

}