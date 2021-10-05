import './App.css';
import './routes.js';
import React from 'react';
import Navbar from './routes.js';
import "./components/FontAwesomeIcons";

class App extends React.Component {
  render()  {
    return  (
      <Navbar></Navbar>
    );
  }
}

export default App;
