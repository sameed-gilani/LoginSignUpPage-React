import './App.css';
import SigningUp from "./SignUp";


function App() {

    // Database to store user details
    const database = [
        {name:"sameed", email:"sameed@email.com", password:"1234"},
        {name:"abc", email:"abc@email.com", password:"1234"},
        {name:"def", email:"def@email.com", password:"1234"},
    ];

    if(localStorage.getItem('localDB').length === 3){
        localStorage.setItem('localDB', JSON.stringify(database));
    }

  return (
    <div>

      <SigningUp/>

    </div>
  );
}

export default App;
