import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default function Post() {

    const [titre, setTitre] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const autor = localStorage.getItem('pseudoUser') ;

    if (localStorage.getItem('pseudoUser') !== null) {

    function handleSubmit(event) {
        event.preventDefault();

        axios.post(`http://localhost:2999/blog/`, {
            autor,
            titre,
            text
        }).then(res => {
            if (res.status === 201) {
                setSuccess(res.data.success);
                setError(null);
            }
        }).catch(error => {
            if (error.response) {
                setError(error.data.error);
                setSuccess(null);
            }
        });
    }

    return  (
        <div id="post" className="post">
            <div>
                <form id="form" onSubmit={handleSubmit}>
                    <h1>Création de post</h1>
                    {success ? <p className="msgSuccess">{success}</p> : ''}
                    {error ? <p className="msgError">{error}</p> : ''}
                    <div className="form">
                        <label htmlFor="title">Titre : </label>
                        <input name="title" type="text" onChange={(e) => setTitre(e.target.value)} />
                    </div>
                    <div className="form">
                        <label htmlFor="text">Texte : </label>
                        <textarea name="text" rows="5" onChange={(e) => setText(e.target.value)} />
                    </div>
                    <button type="submit" className="submit">Poster son texte</button>
                </form>
            </div>
        </div>
    );
        
    } else {
        return (
            <Redirect to="/login"/>
        );
    }

}