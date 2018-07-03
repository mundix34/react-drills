import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';


class App extends Component {
  constructor(){
    super()
    this.state={
      text:'',
      array:[]
    }
    this.handleArray=this.handleArray.bind(this);
  
  }
  handleText(val){
    this.setState({text:val})
  }
  handleArray(){
    this.setState({
      array:[...this.state.array, this.state.text],
      text:''
    })
  }
  render() {
    let array=this.state.array.map((element,index)=>{
      return (
      <Todo key={index} task={element}/>
      )
    })
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <div>
        <input value ={this.state.text}
        placeholder='Enter text'
         onChange={(e)=>this.handleText(e.target.value)}
         />
        <button onClick={this.handleArray}>Add</button>
        
      </div>
      <br/>
      {array}
      </div>
    );
  }
}

export default App;
