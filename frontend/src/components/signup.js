import '../App.css';
import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Signup extends React.Component {
    state = {
        pseudo: '',
        email: '',
        password: '',
        error: null,
        toRedirect: null
    }

    handleSubmit = event => {
        event.preventDefault();

        const pseudo = this.state.pseudo ;
        const email = this.state.email ;
        const password = this.state.password ;

        axios.post(`http://localhost:2999/user/signup/`, {
            pseudo,
            email,
            password
        }).then(res => {
            if (res.status === 201) {
                this.setState({ toRedirect: true });
            }
        }).catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.error });
            }
        });
    }

    render()  {
        if (this.state.toRedirect !== null && this.state.toRedirect === true) {
            return (
                <Redirect to="/login" />
            );
        }
        return  (
            <div id="signup" className="signup">
                <div id="form">
                    <h1>Créer un compte</h1>
                    {this.state.error ? <p>{this.state.error}</p> : ''}
                    <form onSubmit={this.handleSubmit}>
                        <div class="form">
                            <label for="pseudo">Pseudo : </label>
                            <input name="pseudo" type="text" onChange={(e) => this.setState({ pseudo: e.target.value })} />
                        </div>
                        <div class="form">
                            <label for="email">Email : </label>
                            <input name="email" type="text" onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div class="form">
                            <label for="mdp">Mot de passe : </label>
                            <input name="mdp" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <button type="submit" class="submit">S'inscrire</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;
