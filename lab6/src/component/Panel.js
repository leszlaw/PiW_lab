import React, {useEffect, useState} from "react";
import StudentAdder from "./StudentAdder";
import StudentList from "./StudentList";
import Images from "./Images";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import {auth, getAllAnnouncements} from "../firebase";
import Student from "./Student";

const Panel = () => {

    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents(arr => [...arr, student]);
    }

    useEffect(()=>{
        refresh();
    },[]);

    const refresh = () =>{
        getAllAnnouncements().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                addStudent(<Student
                    key={Math.random()}
                    name={doc.data().name}
                    description={doc.data().announcement}
                    email={doc.data().email}/>);
            });
        });
    }

        return(
            <Router>
                <section id="wrapper">
                    <Images/>
                    <NavBar/>
                    <div className={"botContent"}>
                        <Switch>
                            <Route path={"/"} exact>
                                <MainPage></MainPage>
                            </Route>
                            <Route path={"/students"}>
								<StudentList students={students}/>
                            </Route>
                            <Route path={"/add_student"}>
							    <StudentAdder func={refresh}/>
                            </Route>
                            <Route path={"/login"}>
                                <Login/>
                            </Route>
                            <Route path={"/register"}>
                                <Register/>
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

export default Panel;