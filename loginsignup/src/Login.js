import React from 'react';

export default class LoggingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: this.props.passedProps.email, // loads the email from the signUp page
            password: ''
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
        const database = this.props.database;

        //Users input
        let loginEmail = this.state.email;
        let loginPass = this.state.password;

        this.manageLogin(database,loginEmail,loginPass);

    }


    // Manages and validates the users login
    manageLogin = (database,loginEmail,loginPass)=>{

        let flag = false;

        // Checks the validity of the email and password with each object in the database
        for(let i = 0; i<database.length; i++){
            let obj = database[i];

            if(loginEmail === obj.email){
                if(loginPass === obj.password){
                    flag = true
                    break;
                }
            }
        }
        // Async calls
        if(flag === true){
            setTimeout(function() { alert("Logged In !"); }, 500);
        }
        else{
            setTimeout(function() { alert("Wrong password or email !"); }, 500);
        }


    }


    render(){

        return (
            <form onSubmit={this.handleSubmit}>

                <label>Email:</label>
                <input value={this.state.email} name="Email" onChange={this.handleChangeEmail}/>

                <label>Password:</label>
                <input value={this.state.password} name="Password" onChange={this.handleChangePass}/>


                <button type="submit">Submit</button>
            </form>
        );}
}