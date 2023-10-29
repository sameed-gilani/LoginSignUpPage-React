import './App.css';
import SigningIn from "./SignUp";
import HomePage from "./Home";
import LoggingIn from "./Login";

import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./navBarComp";
import GetUser from "./Users";
import ErrorPage from "./NotFound";

function App() {

  // Database to store user details
  const database = [
    {name:"sameed", email:"sameed@email.com", password:"1234"},
    {name:"abc", email:"abc@email.com", password:"1234"},
    {name:"def", email:"def@email.com", password:"1234"},
  ];


  // console.log("LEN : " + localStorage.getItem('localDB').length)

  if(localStorage.getItem('localDB') === '[]'){
    localStorage.setItem('localDB', JSON.stringify(database));
  }

  localStorage.setItem('loginToken',JSON.stringify(false))



  return (
      <>

        <Routes>
          <Route element={<Navigation /> }>

            <Route path='/' element={<HomePage />} />
            <Route path='/signupPage' element={<SigningIn />} />
            <Route path='/loginPage' element={<LoggingIn />} />

            <Route path='/userManagement' element={<ProtectedRoute/>} >
              <Route path={':id'} element={<GetUser />} />
            </Route>
          </Route>


        </Routes>
      </>

  );
}

export default App;
