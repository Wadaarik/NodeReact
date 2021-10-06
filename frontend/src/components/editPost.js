import '../App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

export default function EditPost() {
    const location = useLocation();

    const [id] = useState(location.state.id);
    const [titre, setTitre] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => { getPostData(); }, []);

    const getPostData = () => {
        axios.get(`http://localhost:2999/blog/`+id)
            .then(res => {
                setTitre(res.data.titre);
                setText(res.data.text);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.put(`http://localhost:2999/blog/`+id, {
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
                        <input name="title" type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
                    </div>
                    <div className="form">
                        <label htmlFor="text">Texte : </label>
                        <textarea name="text" value={text} rows="5" onChange={(e) => setText(e.target.value)} />
                    </div>
                    <button type="submit" className="submit">Poster son texte</button>
                </form>
            </div>
        </div>
    );
}