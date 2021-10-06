import '../App.css';
import React from 'react';
import axios from 'axios';

class Post extends React.Component {

    state = {
        title: '',
        text: ''
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
        })
    }

    render()  {
        return  (
            <div id="post" class="post">
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <h1>Création de post</h1>
                        <div class="form">
                            <label for="title">Titre : </label>
                            <input name="title" type="text" onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                        <div class="form">
                            <label for="text">Texte : </label>
                            <textarea name="text" type="text" rows="5" onChange={(e) => this.setState({ text: e.target.value })} />
                        </div>
                        <button type="submit" class="submit">Poster son texte</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;
