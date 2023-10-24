import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./homePage";
import Login from "./loginPage";
import SignUp from "./signupPage";
import Users from "./users";
import NotFound from "./notFoundPage";
import Layout from "./parentLayout";

function App() {
  return (
      <>
          <nav>
              <ul>
                  <li>
                      <NavLink style={ ({isActive}) =>{
                          return(isActive ? {color:'red'}:{color:'black'})
                      }} to="/">Home</NavLink>
                  </li>
                  <li>
                      <Link to="/loginPage">Login</Link>
                  </li>
                  <li>
                      <Link to="/signupPage">Sign up</Link>
                  </li>
              </ul>
          </nav>
          <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/signupPage' element={<SignUp/>} />
              <Route path='/loginPage' element={<Layout/>}>
                  <Route index element={<Login/>} />
                  <Route path=':userId' element={<Users/>} />
              </Route>
              <Route path='*' element={<NotFound/>} />


          </Routes>
      </>


  );
}

export default App;
