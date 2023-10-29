import {Outlet} from "react-router-dom";


export default function Layout(){
    return(
        <>
            <Outlet context={{data: "Received!"}}/>

            <h1>Checking Layout</h1>

        </>
    )
}