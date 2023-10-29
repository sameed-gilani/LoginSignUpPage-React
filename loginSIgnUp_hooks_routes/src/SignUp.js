import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function SigningIn(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [database, setDatabase] = useState(JSON.parse(localStorage.getItem('localDB')))

    const navigate = useNavigate();


    function handleSubmit(event){
        event.preventDefault()
        manageSignUp(email,database);
    }

    function manageSignUp(signUpEmail,database){

        let flag = false
        let emailValidityFlag = validateEmail(signUpEmail); // returns whether the users input email is valid

        if(emailValidityFlag === false){
            alert("You have entered an invalid email address!")
            flag = true
        }

        // Searches the database to see if the same email already exists
        let matchedObj = database.filter(obj => obj.email === signUpEmail);
        if(matchedObj.length === 1){
            alert("Email already Exists. Sign in instead?")
            flag = true
        }

        // If everything is valid, user gets an alert and the login page loads
        if(flag === false){

            const newUser = {
                name: name,
                email: email,
                password: password
            }

            database.push(newUser);
            localStorage.setItem('localDB',JSON.stringify(database))
            setDatabase(database);

            alert("Signed Up. Loading Login Page");
            navigate('/loginPage');
        }
    }

    function validateEmail(mail){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }


        return (
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={name} name="Name" onChange={(event)=>{
                    setName(event.target.value)
                }}/>

                <label>Email:</label>
                <input value={email} name="Email" onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>

                <label>Password:</label>
                <input value={password} name="Password" onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>

                <button type="submit">Submit</button>
                <button onClick={()=>{
                    navigate('/loginPage');

                }}>Sign in?</button>
            </form>
        );



}