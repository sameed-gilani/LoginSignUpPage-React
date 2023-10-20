import React from 'react';
import ReactDOM from "react-dom/client";
import LoggingIn from "./Login";
import SigningUp from "./SignUp";

export default class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: this.props.passedProps.email, // loads the email from the signUp page
            password: '',
            db: JSON.parse(localStorage.getItem('localDB')),
            currentView: 'ManageUsers'
        };

    }

    handleMouseOut=()=>{
        console.log("Out");
    }

    handleMouseOver =(event)=>{

        let userEmail = event.target.value;

        const database = this.state.db

        let matchedObj = database.filter(obj => obj.email === userEmail);
        console.log(matchedObj);

    }


    listUsers = () =>{

        const database = this.state.db

        const listItems = database.map((user) =>
            <li key={user.email} >{user.email+"    ->    "}<button value ={user.email}
                                                 onClick={this.handleDelete}
                                                 onMouseOver={this.handleMouseOver}
                                                 onMouseOut={this.handleMouseOut}>Delete</button></li>
        );
        return (
            <ul>{listItems} </ul>
        );
    }

    handleDelete = (event)=>{

        let delEmail = event.target.value;
        let database = this.state.db;

        // const strDatabase = localStorage.getItem('localDB'); // The database that was passed as a prop
        // const database = JSON.parse(strDatabase)


        let updatedDB = database.filter(obj => obj.email !== delEmail);

        this.setState({db: updatedDB})
        localStorage.setItem('localDB',JSON.stringify(updatedDB))


    }

    goToLogin=()=>{
        this.setState({currentView:'Login'})
    }
    goToSignUp=()=>{
        this.setState({currentView:'SignUp'})
    }
    render(){

        if(this.state.currentView === 'ManageUsers'){
            return (
                <div>
                    {this.listUsers()}
                    <button onClick={this.goToSignUp}>Go to Sign up</button>
                    <button onClick={this.goToLogin}>Go to Login</button>

                </div>
            );
        }
        if(this.state.currentView === 'Login'){
            return(
                <LoggingIn passedProps={this.state}/>
            );
        }
        if(this.state.currentView === 'SignUp'){
            return(
                <SigningUp passedProps={this.state}/>
                );
        }

    }
}