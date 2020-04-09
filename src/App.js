import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Dada from "./components/Dada";
import user from "./user.json";
import Characters from './components/Characters';
// import Form from "./components/Form";
// import Characters from "./components/Characters";

class App extends Component {
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header {...user}/>
      <Dada />
      <Characters />
    </div>
  );
}
}

export default App;