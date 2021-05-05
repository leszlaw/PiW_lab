import React from "react";
import StudentAdder from "./StudentAdder";
import StudentList from "./StudentList";
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import logo1 from './images/1.png'
import logo2 from './images/2.png'
import logo3 from './images/3.png'

class Panel extends React.Component {

    state = {
        students: []
    }

    addStudent(student){
        this.setState({
            students: this.state.students.concat(student)
        })
    }

    render(){
        return(
            <Router>
                <section id="wrapper">
                    <Switch>
                        <Route path={"/"} exact>
                            <img src={logo1}/>
                        </Route>
                        <Route path={"/students"}>
                            <img src={logo2}/>
                        </Route>
                        <Route path={"/add_student"}>
                            <img src={logo3}/>
                        </Route>
                        <Route>
                            <img src={logo1}/>
                        </Route>
                    </Switch>
                    <nav className={"topNav"}>
                        <NavLink to = "/" exact>Strona glowna</NavLink>
                        <NavLink to = "/students" >Lista studentow</NavLink>
                        <NavLink to = "/add_student" >Dodaj studenta</NavLink>
                    </nav>
                    <div className={"botContent"}>
                        <Switch>
                            <Route path={"/"} exact>
                                <MainPage></MainPage>
                            </Route>
                            <Route path={"/students"}>
                                <StudentAdder func={this.addStudent.bind(this)}/>
                            </Route>
                            <Route path={"/add_student"}>
                                <StudentList students={this.state.students}/>
                            </Route>
                            <Route>
                                <p>404 NOT FOUND</p>
                            </Route>
                        </Switch>
                    </div>
                </section>
            </Router>
        );
    }
}

export default Panel;