import React from 'react';
import ReactDOM from "react-dom/client";

export default class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: this.props.passedProps.email, // loads the email from the signUp page
            password: ''
        };

    }


    listUsers = () =>{

        const strDatabase = localStorage.getItem('localDB'); // The database that was passed as a prop
        const database = JSON.parse(strDatabase)

        const listItems = database.map((user) =>
            <li>{user.email+"    ->    "}<button value ={user.email} onClick={this.handleDelete}> Delete</button></li>
        );
        return (
            <ul>{listItems} </ul>
        );
    }

    handleDelete = (event)=>{

        let delEmail = event.target.value;

        const strDatabase = localStorage.getItem('localDB'); // The database that was passed as a prop
        const database = JSON.parse(strDatabase)

        let updatedDB = database.filter(obj => obj.email !== delEmail);

        localStorage.setItem('localDB',JSON.stringify(updatedDB))
        this.forceUpdate();


    }


    render(){

        return (
            <div>
                {this.listUsers()}

            </div>

        );}
}