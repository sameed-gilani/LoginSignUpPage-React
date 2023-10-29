import React, {useState} from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';

export default function UserManagement(props){

    const navigate = useNavigate();

    const [database, setDatabase] = useState(JSON.parse(localStorage.getItem('localDB')))

    let id = 0
    function listUsers(){

        const listItems = database.map((user) =>

            <Link to={`/userManagement/${++id}`} >
                <li key={user.email} >{ id + " - "+ user.email+"    ->    "}
                <button value ={user.email} onClick={handleDelete}>Delete</button>
            </li>
            </Link>

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





    return (
        <div>
            {listUsers()}

            <button onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))
                navigate('/signupPage');
            }}>Go to Sign up</button>

            <button onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))
                navigate('/loginPage');
            }}>Go to Login</button>

            <button onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))
                navigate('/');

            }}>Go to Home</button>

            <Outlet/>
        </div>

    );


}