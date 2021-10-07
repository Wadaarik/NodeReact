import '../App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


export default function Table() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        getAllPost();
    }, []);

    function getAllPost() {
        axios.get(`http://localhost:2999/blog/`)
            .then(res => {
                setBlog(res.data);
            })
    }

    function deletePost(id) {
        axios.delete(`http://localhost:2999/blog/${id}`)
            .then(() => {
                getAllPost();
            })
    }

    return  (
        <div id="table" className="table">
            <div className="container">
                <h1>Datas</h1>
                <div className="table">
                    <table className="demo">
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Texte</th>
                            <th>Auteur</th>
                            <th>Edit</th>
                            <th>Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blog.map((data) => {
                            return (
                                <tr>
                                    <td>{data.titre}</td>
                                    <td>{data.text}</td>
                                    <td>{data.autor}</td>
                                    {localStorage.getItem('pseudoUser') !== null
                                        ? <>
                                            <td id="edit"><Link to={{ pathname: "/editPost", state: { id: data._id } }}><FontAwesomeIcon icon="pen" /></Link></td>
                                            <td id="delete" onClick={() => deletePost(data._id)}><FontAwesomeIcon icon="trash" /></td>
                                        </>
                                        : <td colSpan={2}><Link to={{ pathname: "/login" }}>Il faut être connecté</Link></td>     }
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
