import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './Image';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Image myImage={"http://refinersfire.us/wp-content/uploads/2013/11/Cat-Fight.jpg"}/>
        
      </div>
    );
  }
}

export default App;
