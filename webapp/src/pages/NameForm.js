/*eslint-disable no-unused-expressions */
import React from 'react'
//import image from '../background_login.jpeg';


var sha256 = require('js-sha256');



class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      update: (isLoggedIn) => {
        this.props.onUpdate(isLoggedIn);
        this.setState({isLoggedIn: isLoggedIn});

      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  

  handleSubmit(e) {
    var log=false;
    var upd = this.state.update;
    var us = this.username.value;
    var pw =  sha256(this.password.value);
    this.username.value = "";
    this.password.value = "";

    fetch('http://localhost:2999/connexion', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-type':'application/json' },
      body :JSON.stringify({
        'username': us, 
        'password': pw
      })
  })
  .then((response) => response.json())
  .then()
  .catch((error) => {
      console.error(error);
  })
  
   setTimeout( () => {
    var Http = new XMLHttpRequest();
    var url='http://localhost:2999/connexion';
    Http.open("GET", url);
   Http.send();

    Http.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
        var json = JSON.parse(Http.response);
        log=json.access;
        if(String(log) === "false"){
          alert("Invalid username or password");
        }
      upd(String(log));
      }
    };
   }
   , 350);
 
    e.preventDefault();
  }


  render() {
    
    return (<div >
      <h1 style={{
        position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)'
    }}>Please log in !</h1>
      <form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }} onSubmit={this.handleSubmit}>
        <label>
          
          <input  style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, -50%)'
    }} placeholder="username" ref={(username) => this.username = username} /> <p> </p>        <p> </p>

          <input   placeholder="password" type="password" ref={(password) => {
                        this.password = password} 
          }
          />
        </label>
        <p> </p>
        <p></p>
        <input style={{
        position: 'absolute', left: '50%',  
        transform: 'translate(-50%, -50%)'
    }}type="submit" value="Submit" />
      </form>
      </div>)
  }
}




export default NameForm;