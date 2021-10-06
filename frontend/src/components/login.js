import '../App.css';
import React, {useState} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";

export default function Login({callbackOnLog}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [toRedirect, setToRedirect] = useState(null);

    function handleSubmit(event){
        event.preventDefault();

        axios.post(`http://localhost:2999/user/login/`, {
            email,
            password
        }).then(res => {
            localStorage.clear(); // Clear localStorage pour être sur
            // Set des items dans le local storage
            localStorage.setItem('tokenUser', res.data.token);
            localStorage.setItem('pseudoUser', res.data.pseudo);
            // Callback de route.js afin de savoir si on n'est co et changer le menu
            callbackOnLog();
            // met toRedirect à true afin de pouvoir redirect l'user
            setToRedirect(true);
        }).catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });
    }

    return (
        <>
            {toRedirect && <Redirect to="/post" />}
            <div id="login" className="login">
                <div id="form">
                    <h1>Se login</h1>
                    {error ? <p className="msgError">{error}</p> : ''}
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <label htmlFor="email">Email : </label>
                            <input name="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form">
                            <label htmlFor="mdp">Mot de passe : </label>
                            <input name="mdp" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </>
    )
}

