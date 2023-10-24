import {useOutletContext, useParams} from "react-router-dom";


export default function Users(){

    const {userId} = useParams()
    const contextObj = useOutletContext()

    return(
       <>
           <h1>User {userId} </h1>
           <h2>Getting data from context => {contextObj.data}</h2>
       </>

    )
}