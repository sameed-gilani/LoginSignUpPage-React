import React, {useState} from 'react';
import LoggingIn from "./Login";
import SigningUp from "./SignUp";

export default function UserManagement(props){

    const [currentView, setCurrentView] = useState('ManageUsers')
    const [database, setDatabase] = useState(JSON.parse(localStorage.getItem('localDB')))

    function listUsers(){

        const listItems = database.map((user) =>
            <li key={user.email} >{user.email+"    ->    "}<button value ={user.email}
                                                                   onClick={handleDelete}>Delete</button></li>
        );
        return (
            <ul>{listItems} </ul>
        );
    }

    function handleDelete(event){

        let delEmail = event.target.value;
        let updatedDB = database.filter(obj => obj.email !== delEmail);

        localStorage.setItem('localDB',JSON.stringify(updatedDB))
        setDatabase(updatedDB);

    }

    function handleViewChangeSignUp(){
        setCurrentView('SignUp')
    }
    function handleViewChangeLogin(){
        setCurrentView('Login')
    }


    if(currentView === 'ManageUsers'){
        return (
            <div>
                {listUsers()}
                <button onClick={handleViewChangeSignUp}>Go to Sign up</button>
                <button onClick={handleViewChangeLogin}>Go to Login</button>
            </div>
        );
    }
    if(currentView === 'Login'){
        return(
            <LoggingIn />
        );
    }
    if(currentView === 'SignUp'){
        return(
            <SigningUp />
        );
    }


}