import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';
import Table from "./components/table";
import logo from './loituma.gif';
import Signup from "./components/signup";
import Login from "./components/login";
import Post from "./components/post";
import {Redirect} from "react-router-dom";

class Navbar extends React.Component {

    render()  {

        const logged = localStorage.getItem('tokenUser') !== null ? true : false

        return (
        <BrowserRouter>
            <div>
                <div className="navbar">
                    <Link className="logo" to="/"><img src={logo} alt="Sheesh"></img></Link>
                    <div className="links">
                        <p><Link to="/about">A propos</Link></p>
                        <p><Link to="/table">Table</Link></p>

                        {logged ? (<p><Link to="/post">Post</Link></p>) : (<p><Link to="/signup">Sign Up</Link></p>)}
                        {logged ? (<p><Link to="/disconnect">Disconnect</Link></p>) : (<p><Link to="/login">Login</Link></p>)}

                    </div>
                </div>
                <div className="main-route-place">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/table" component={Table} />
                <Route path="/post" component={Post} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/disconnect" component={Disconnect} />                
                </div>
            </div>
        </BrowserRouter>
        );
    }
  }

  
  class Home extends React.Component {
  
    render()  {
      return (
        <div>
          <h2>Home</h2>
        </div>
      );
    }
  }

  class Disconnect extends React.Component {
    render() {
        localStorage.clear();
        return (
            <Redirect to="/" />
        );
    }
  }
  
  class About  extends React.Component {
    render() {
      return (
        <div id="about">
            <div id="main-contain">
                <h2>About</h2>
            </div>
        </div>
      );
    }
  }

  export default Navbar;