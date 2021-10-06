import '../App.css';
import React from 'react';
import axios from 'axios';

class Post extends React.Component {

    state = {
        title: '',
        text: '',
        error: null,
        success: null
    }

    handleSubmit = event => {
        event.preventDefault();

        const autor = localStorage.getItem('pseudoUser') ;
        const titre = this.state.title ;
        const text = this.state.text ;

        axios.post(`http://localhost:2999/blog/`, {
            autor,
            titre,
            text
        }).then(res => {
            if (res.status === 201) {
                this.setState({success: res.data.success});
                this.setState({error: null});
            }
        }).catch(error => {
            if (error.response) {
                this.setState({error: error.response.data.error});
                this.setState({success: null});
            }
        });
    }

    render()  {
        return  (
            <div id="post" className="post">
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <h1>Création de post</h1>
                        {this.state.success ? <p className="msgSuccess">{this.state.success}</p> : ''}
                        {this.state.error ? <p className="msgError">{this.state.error}</p> : ''}
                        <div className="form">
                            <label htmlFor="title">Titre : </label>
                            <input name="title" type="text" onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                        <div className="form">
                            <label htmlFor="text">Texte : </label>
                            <textarea name="text" rows="5" onChange={(e) => this.setState({ text: e.target.value })} />
                        </div>
                        <button type="submit" className="submit">Poster son texte</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;
