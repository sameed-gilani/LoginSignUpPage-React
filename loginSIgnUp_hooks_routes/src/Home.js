import {Link} from "react-router-dom";

export default function HomePage(){

    return(
        <>
            <h1>Home page</h1>
            <Link to={'/SignupPage'}>Go to Sign Up</Link>
            <br/>
            <Link to={'/loginPage'}>Go to Login</Link>

        </>
    )
}