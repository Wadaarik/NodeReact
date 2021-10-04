import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';
import Table from "./components/table";

class Navbar extends React.Component {
    render()  {
      return  (
        <BrowserRouter>
          <div>
            <div class="navbar">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">A propos</Link></p>
                <p><Link to="/table">Table</Link></p>
                <p><Link to="/topics">Topics</Link></p>
            </div>
  
            <hr />
            <div className="main-route-place">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/table" component={Table} />
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