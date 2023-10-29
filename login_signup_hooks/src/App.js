import './App.css';
import SigningIn from "./SignUp";

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


  return (
      <SigningIn/>
  );
}

export default App;
