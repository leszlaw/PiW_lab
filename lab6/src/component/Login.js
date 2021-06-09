import { auth } from '../firebase';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const login = () => {
        auth.signInWithEmailAndPassword(email,password)
            .then(loggedUser => {
                console.log("zalogowano");
                setRedirect(true);
            }).catch(error => {
                console.log(error);
        })
    }

    if(redirect)
        return <Redirect to="/add_student"></Redirect>

    return (
        <div className="form">
            <div>
            <input
                className="font-input"
                placeholder="Email"
                value={email}
                onChange={e => {setEmail(e.target.value)}}
            />
            </div>
            <div>
            <input
                className="font-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => {setPassword(e.target.value)}}
            />
            </div>
            <div>
            <button onClick={login}>Zaloguj</button>
            </div>
        </div>
    )

}

export default Login;