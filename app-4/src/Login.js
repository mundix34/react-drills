import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.loginAlert=this.loginAlert.bind(this);
    }
    updateUserName(val){
        this.setState({username:val})
    }
    updatePassword(val){
        this.setState({password:val})
    }
    loginAlert(){
        alert(`username:${this.state.username} password:${this.state.password}`);
    }
  render() {
    return (
      <div className="App">
      <input onChange = { (e) => this.updateUserName(e.target.value)} type ='text'/ >
      <input onChange = { (e) => this.updatePassword(e.target.value)} type ='text'/>
      <button onClick = { this.loginAlert} >login</button>


        
      </div>
    );
  }
}

export default Login;