import '../App.css';
import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    state = {
        pseudo: '',
        email: '',
        password: ''
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
        })
    }

    render()  {
        return  (
            <div id="signup" className="signup">
                
                <h1>Créer un compte</h1>
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
                    <input type="submit" value='submit'/>
                </form>

            </div>
        );
    }
}

export default Signup;
