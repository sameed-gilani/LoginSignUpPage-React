import React from 'react';
import LoggingIn from "./Login";
import ReactDOM from "react-dom/client";

export default class SigningUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };

    }

    // Handlers for each property of the state
    handleChangeName = (event) => {
        this.setState({name:event.target.value},()=>{
            console.log("name: " + this.state.name);
        })
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value},()=>{
            console.log("name: " + this.state.email);
        })
    }
    handleChangePass = (event) => {
        this.setState({password :event.target.value},()=>{
            console.log("name: " + this.state.password);
        })
    }

    // Function called when user clicks the Submit button
    handleSubmit = (event) => {
        event.preventDefault(); // Prevents the form from being submitted

        const strDatabase = localStorage.getItem('localDB'); // The database that was passed as a prop
        const database = JSON.parse(strDatabase)

        let signUpEmail = this.state.email; // The users input email

        this.ManageSignUp(signUpEmail,database);

    }

    //Handles the validation and processing of the users sign in
    ManageSignUp = (signUpEmail,database)=>{

        let flag = false
        let emailValidityFlag = this.ValidateEmail(signUpEmail); // returns whether the users input email is valid

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
            database.push(this.state);
            localStorage.setItem('localDB',JSON.stringify(database))
            alert("Signed Up. Loading Login Page");
            setTimeout(this.goToLogin,1000); // Async Call
        }
    }


    // renders the login page
    goToLogin = ()=>{
        console.log("Clicked")
        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(
            <LoggingIn passedProps={this.state}/>
        )
    }

    // Returns true if the email is valid
    ValidateEmail = (mail) => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return true
        }
        return false
    }

    render(){

        return (
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input value={this.state.name} name="Name" onChange={this.handleChangeName}/>

            <label>Email:</label>
            <input value={this.state.email} name="Email" onChange={this.handleChangeEmail}/>

            <label>Password:</label>
            <input value={this.state.password} name="Password" onChange={this.handleChangePass}/>

            <button type="submit">Submit</button>
            <button onClick={this.goToLogin}>Sign in?</button>
        </form>

    );}
}