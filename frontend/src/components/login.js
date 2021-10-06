import '../App.css';
import React from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null,
        toRedirect: null
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.state.email ;
        const password = this.state.password ;

        axios.post(`http://localhost:2999/user/login/`, {
            email,
            password
        }).then(res => {
            localStorage.clear();
            localStorage.setItem('tokenUser', res.data.token);
            localStorage.setItem('pseudoUser', res.data.pseudo);
            this.setState({ toRedirect: true });
        }).catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.error });
            }
        });
    }

    render()  {
        if (this.state.toRedirect !== null && this.state.toRedirect === true) {
            return (
                <Redirect to="/post" />
            );
        }
        return  (
            <div id="login" className="login">
                <div id="form">
                    <h1>Se login</h1>
                    {this.state.error ? <p className="msgError">{this.state.error}</p> : ''}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form">
                            <label htmlFor="email">Email : </label>
                            <input name="email" type="text" onChange={(e) => this.setState({email: e.target.value})}/>
                        </div>
                        <div className="form">
                            <label htmlFor="mdp">Mot de passe : </label>
                            <input name="mdp" type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                        </div>
                        <button type="submit" className="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
