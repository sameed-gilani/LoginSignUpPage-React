import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function NotFound(){
    const navigate= useNavigate()
    setTimeout(()=>{
        navigate('/')
    },1000)

    return(
        <>
            <h1>PAGE NOT FOUND</h1>
            {/*<Navigate to={'/'} />*/}
        </>
    )
}