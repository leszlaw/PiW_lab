import React from "react";
import {addAnnouncement, getAllAnnouncements, auth} from "../firebase";
import Student from "./Student";

class StudentAdder extends React.Component {

    constructor(props){
        super();
        this.state= {
            func : props,
            name : "",
            description : "",
            email : "",
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    handleDescChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    createStudent(){
        if(this.state.description === ""){
            return
        }
         this.state.func.func();
        addAnnouncement(auth.currentUser.displayName,this.state.description,auth.currentUser.email);
        this.setState({
            name: "",
            description: "",
            email: ""
        })
    }

    render(){
        return(
            <>
                <form>
                    <p>Dodanie nowego studenta {this.state.test}</p>
                    <div>
                        <label>Opis: &nbsp;&nbsp;</label>
                        <input type="text" value={this.state.description} onChange={this.handleDescChange}/>
                    </div>
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick={this.createStudent.bind(this)}>+</button>
                    <br></br><br></br><br></br><br></br>
                </form>
            </>
        );
    }
}

export default StudentAdder;