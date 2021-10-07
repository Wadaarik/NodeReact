import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import Table from "./components/table";
import logo from './loituma.gif';
import Signup from "./components/signup";
import Login from "./components/login";
import Post from "./components/post";
import Iframe from 'react-iframe'

export default function Navbar() {
    const [logged, setLogged] = useState(localStorage.getItem('tokenUser') !== null ? true : false);

    return (
        <BrowserRouter>
            <div>
                <div className="navbar">
                    <Link className="logo" to="/"><img src={logo} alt="Sheesh"></img></Link>
                    <div className="links">
                        <p><Link to="/table">Table</Link></p>
                        {logged ? (<p><Link to="/post">Post</Link></p>) : (<p><Link to="/signup">Sign Up</Link></p>)}
                        {logged ? (<p><Link onClick={()=>setLogged(false)} to="/disconnect">Disconnect</Link></p>) : (<p><Link to="/login">Login</Link></p>)}
                    </div>
                </div>
                <div className="main-route-place">
                    <Route exact path="/" component={Home} />
                    <Route path="/table" component={Table} />
                    <Route path="/post" component={Post} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login">
                        <Login callbackOnLog={()=>setLogged(true)} />
                    </Route>
                    <Route path="/disconnect" component={Disconnect} />
                    <Route path="/play" component={Play} />
                </div>
            </div>
        </BrowserRouter>
    );
}


  function Home() {
    return (
      <>
        <div className="home">
          <h1>Bonjour !</h1>
          <h2>Bienvenue sur notre super site fait en Node.js pour le back et React pour le front.</h2>
          <p>Ici nous avons quelques pages faites spécialement pour notre CRUD !</p>
          <p>Tout d'abord pour voir les différents posts vous pouvez cliquer sur le bouton "Table" de la navbar. <small>N'oubliez pas de lancer le npm i sur le fichier back :)</small></p>
          <p>Ensuite si vous voulez pouvoir en créer, vous pouvez simplement créer un compte puis vous connecter à celui là !</p>
          <div>
            <small>Si vous n'avez pas envie de faire du Crud vous pouvez aussi cliquez ici !</small>
            <button><Link to="/play">Jouer</Link></button>
          </div>
        </div>
      </>
    );
  }

  function Play() {
    return (
      <>
        <div className="iframe">
          <Iframe src="https://funhtml5games.com?embed=flappy" frameborder="0" scrolling="no"></Iframe>
        </div>
      </>
    );
  }

  class Disconnect extends React.Component {
    render() {
        localStorage.clear();
        return (
            <Redirect to="/" />
        );
    }
  }
