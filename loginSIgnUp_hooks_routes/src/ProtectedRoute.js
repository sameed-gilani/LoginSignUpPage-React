import UserManagement from "./ManageUsers";
import {Navigate, useNavigate} from 'react-router-dom';

export default function ProtectedRoute(props){

    const navigate = useNavigate()

    if(JSON.parse(localStorage.getItem('loginToken')) === true){
        return(
            <>
                <h1>CAME FROM PROTECTED</h1>
                <UserManagement/>
            </>
        );
    }else{

        return(
          <Navigate to={'/loginPage'} replace={true}  />
        );
    }


}