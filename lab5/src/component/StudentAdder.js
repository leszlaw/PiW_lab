import React from "react";
import Student from "./Student";

class StudentAdder extends React.Component {

    constructor(props){
        super();
        this.state= {
            func : props,
            name : "",
            description : "",
            email : ""
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
        if( this.state.name === "" || this.state.description === "" || this.state.emial === ""){
            return
        }
        this.state.func.func(<Student
            key={Math.random()}
            name={this.state.name}
            description={this.state.description}
            email={this.state.email}/>)
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
                    <p>Dodanie nowego studenta</p>
                    <div>
                        <label>Imie: &nbsp;&nbsp;</label>
                        <input type="text"value={this.state.name}onChange={this.handleNameChange}/>
                    </div>
                    <div>
                        <label>Opis: &nbsp;&nbsp;</label>
                        <input type="text" value={this.state.description} onChange={this.handleDescChange}/>
                    </div>
                    <div>
                        <label>Email: &nbsp;</label>
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
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