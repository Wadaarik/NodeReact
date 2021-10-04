import '../App.css';
import React from 'react';

class Signup extends React.Component {
    render()  {
        return  (
            <div id="signup" className="signup">
                
                <h1>Créer un compte</h1>
                <div class="form">
                    <label for="pseudo"> Pseudo</label>
                    <input name="pseudo" type="text" />
                </div>
                <div class="form">
                    <label for="email"> Email</label>
                    <input name="email" type="text" />
                </div>
                <div class="form">
                    <label for="mdp"> Mot de passe</label>
                    <input name="mdp" type="text" />
                </div>

            </div>
        );
    }
}

export default Signup;
