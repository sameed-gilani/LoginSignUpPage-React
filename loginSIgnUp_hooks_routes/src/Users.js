import {useParams} from "react-router-dom";


export default function GetUser(){

    const {id} = useParams()


    return(
      <h1>User {id} Details</h1>


    );
}
