import '../App.css';
import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Table extends React.Component {
    state = {
        blog: []
    }

    componentDidMount() {
        axios.get(`http://localhost:2999/blog/`)
            .then(res => {
                const blog = res.data;
                this.setState({ blog });
            })
    }

    handleDelete = event => {
        axios.delete(`http://localhost:2999/blog/${event}`)
            .then(() => {
                this.componentDidMount();
            })
    }

    render()  {
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
                            {this.state.blog.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.titre}</td>
                                        <td>{data.text}</td>
                                        <td>{data.autor}</td>
                                        <td id="edit"><FontAwesomeIcon icon="pen" /></td>
                                        <td id="delete" onClick={() => this.handleDelete(data._id)}><FontAwesomeIcon icon="trash" /></td>
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
}

export default Table;
