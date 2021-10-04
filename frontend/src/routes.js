import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';
import logo from './loituma.jpg';

class Navbar extends React.Component {
    render()  {
      return  (
        <BrowserRouter>
          <div>
            <div class="navbar">
                <p class="logo"><Link to="/"><img src={logo} alt="Sheesh"></img></Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/topics">Topics</Link></p>
            </div>
  
            <hr />
            <div className="main-route-place">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
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
  
  class About  extends React.Component {
    render() {
      return (
        <div>
          <h2>About</h2>
        </div>
      );
    }
  }
  
  class Topics extends React.Component {
    render() {
      return (
        <div>
          <h2>Topics</h2>
        </div>
      );
    }
  }

  export default Navbar;