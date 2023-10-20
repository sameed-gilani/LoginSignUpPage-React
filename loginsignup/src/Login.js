import React from 'react';
import ReactDOM from "react-dom/client";
import UserManagement from "./ManageUsers";

export default class LoggingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: this.props.passedProps.email, // loads the email from the signUp page
            password: '',
            currentView: 'Login'
        };

    }


    // Updates the state properties as they are changed
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

    // Called when the submit button is clicked
    handleSubmit = (event) => {
        event.preventDefault();

        //Loads the database
        const strDatabase = localStorage.getItem('localDB'); // The database that was passed as a prop
        const database = JSON.parse(strDatabase)

        //Users input
        let loginEmail = this.state.email;
        let loginPass = this.state.password;

        this.manageLogin(database,loginEmail,loginPass);

    }


    // Manages and validates the users login
    manageLogin = (database,loginEmail,loginPass)=>{

        let flag = false;

        // Checks the validity of the email and password with each object in the database

        let matchedObj = database.filter(obj => obj.email === loginEmail && obj.password === loginPass);
        if(matchedObj.length === 1){
            flag = true
        }

        // Async calls
        if(flag === true){
            setTimeout(function() { alert("Logged In!"); }, 500);
            this.goToManageUsers();
        }
        else{
            setTimeout(function() { alert("Wrong password or email !"); }, 500);
        }

    }

    goToManageUsers =()=>{
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        //
        // root.render(
        //     <UserManagement passedProps={this.state}/>
        // )
        this.setState({currentView:'ManageUsers'})

    }


    render(){

        if(this.state.currentView === 'Login'){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>

                        <label>Email:</label>
                        <input value={this.state.email} name="Email" onChange={this.handleChangeEmail}/>

                        <label>Password:</label>
                        <input value={this.state.password} name="Password" onChange={this.handleChangePass}/>


                        <button type="submit">Submit</button>
                    </form>
                </div>

            );
        }
        if(this.state.currentView === 'ManageUsers'){
            return(
                <UserManagement passedProps={this.state}/>
            );
        }


    }
}