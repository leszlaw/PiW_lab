import { auth } from '../firebase';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
            .then(loggedUser => {
                loggedUser.user.updateProfile({
                    displayName: displayName
                })
                console.log("zarejestrowano");
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
                    placeholder="Name"
                    value={displayName}
                    onChange={e => {setDisplayName(e.target.value)}}
                />
            </div>
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
                <button onClick={register}>Zarejestruj</button>
            </div>
        </div>
    )

}

export default Register;