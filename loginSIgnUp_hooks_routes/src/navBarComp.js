import {Link, Outlet} from "react-router-dom";


export default function Navigation(){
    return(
        <>

        <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }} onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))

            }}>
                Home
            </Link>

            <Link to="/signupPage" style={{ padding: 5 }} onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))

            }}>
                Sign up
            </Link>

            <Link to="/loginPage" style={{ padding: 5 }} onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))
            }}>
                Login
            </Link>

            <Link to="/userManagement" style={{ padding: 5 }} onClick={()=>{
                localStorage.setItem('loginToken',JSON.stringify(false))
            }}>
                User Management
            </Link>
        </nav>

            <Outlet/>

        </>
    )
}