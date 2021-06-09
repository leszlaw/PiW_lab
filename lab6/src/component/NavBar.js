import {NavLink} from "react-router-dom";
import {useState, useEffect} from 'react';
import {auth} from "../firebase";

const NavBar = () => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if(u){
                setUser(u);
            }else{
                setUser(null);
                console.log("user not logged");
            }
        });
        return () => unsubscribe;
    },[]);

    const logout = () => {
        auth.signOut();
    }

    if(user)
        return(
            <nav className={"topNav"}>
                <NavLink to = "/" exact>Strona glowna</NavLink>
                <NavLink to = "/students" >Lista studentow</NavLink>
                <NavLink to = "/add_student">Dodaj studenta</NavLink>
                <a>{user.displayName}</a>
                <a onClick={logout} href="/login">Wyloguj</a>
            </nav>
        )
    return(
        <nav className={"topNav"}>
            <NavLink to = "/" exact>Strona glowna</NavLink>
            <NavLink to = "/students" >Lista studentow</NavLink>
            <NavLink to = "/login" >Zaloguj</NavLink>
            <NavLink to = "/register" >Zarejestruj</NavLink>
        </nav>
    )
}

export default NavBar;