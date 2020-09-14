import { auth } from './firebase';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            //it successfully signed in
            history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //it successfully created a new user with email and password             
            if (auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt="Amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input 
                        type="text"  
                        value={email} name="" 
                        onChange={e => setEmail(e.target.value)}  
                    />

                    <h5>Password</h5>                    
                    <input 
                        type="Password" 
                        value={password} name=""
                        onChange={e => setPassword(e.target.value)} 
                    /> 

                    <button onClick={signIn}
                        type="submit" 
                        className="login__signInButton">Sign in</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register}                   
                    className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
