import './App.css';
import SigningUp from "./SignUp";


function App() {

    // Database to store user details
    const database = [
        {name:"sameed", email:"sameed@email.com", password:"1234"},
        {name:"abc", email:"abc@email.com", password:"1234"},
        {name:"def", email:"def@email.com", password:"1234"},
    ];

  return (
    <div>

      <SigningUp database={database}/>

    </div>
  );
}

export default App;
