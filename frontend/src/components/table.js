import '../App.css';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Table extends React.Component {
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
                            <tr>
                                <td>NewPost</td>
                                <td>Lorem ipsum ...</td>
                                <td>AramT</td>
                                <td id="edit"><FontAwesomeIcon icon="pen" /></td>
                                <td id="delete"><FontAwesomeIcon icon="trash" /></td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        );
    }
}

export default Table;
