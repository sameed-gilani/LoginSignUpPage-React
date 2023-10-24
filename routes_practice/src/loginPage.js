import {Link, Outlet, Route, Routes} from "react-router-dom";

export default function Login(){
    return(
        <>
            <h1>List of users:</h1>
            <Link to="/loginPage/1">User 1</Link>
            <br/>
            <Link to="/loginPage/2">User 2</Link>


        </>
    )
}