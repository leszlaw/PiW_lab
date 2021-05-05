import React from "react";
import Student from "./Student";

class StudentList extends React.Component {
    render() {
        const listToRender = this.props.students.map( it => (
            <Student key={it} text={it} />
        ))
        return(
            <ul>
                {this.props.students}
            </ul>
        );
    }
}

export default StudentList;