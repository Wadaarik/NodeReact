import '../App.css';
import React from 'react';
import axios from "axios";

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.state.email ;
        const password = this.state.password ;

        axios.post(`http://localhost:2999/user/login/`, {
            email,
            password
        }).then(res => {
            console.log(res.data);
            // console.log(res.data.token);
            window.token = res.data.token;
        }).catch(error => {
            if (error.response) {
                alert('Le mail ou le mot de passe n\'est pas bon. Merci de vérifier.');
            }
        });
    }

    render()  {
        return  (
            <div id="login" className="login">
                <div id="form">
                    <h1>Se login</h1>
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
