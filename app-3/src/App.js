import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      text:'',
      array:[
        '1',
        '2',
        '3',
        'four',
        'five'
      ]
    }
  }
  handleChange(val){
    this.setState( {text: val} )
  }
  render() {
    let displayArray=this.state.array.filter((element,index)=>{
      return element.includes(this.state.text);
    }).map((element,index)=>{
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
      <input onChange={(e)=>this.handleChange(e.target.value)} type = 'text'/>
      <p>{displayArray}</p>
       
      </div>
    );
  }
}

export default App;
