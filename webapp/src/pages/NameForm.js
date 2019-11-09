/*eslint-disable no-unused-expressions */
import React from 'react'
var sha256 = require('js-sha256');

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isUnvalidated: false,
      update: (isLoggedIn, isUnvalidated) => {
        console.log("in update "+isLoggedIn, isUnvalidated);
        this.props.onUpdate(isLoggedIn, isUnvalidated);
        this.setState({isLoggedIn: isLoggedIn, isUnvalidated: isUnvalidated});
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
    var log=false;
    var upd = this.state.update;
    var us = this.username.value;
    var pw =  sha256(this.password.value);
    var Unval=false;
    this.username.value = "";
    this.password.value = "";

    //alert(this.username.value);
    //alert(sha256(this.password.value));
    fetch('http://localhost:3000/connexion', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-type':'application/json' },
      body :JSON.stringify({
        'username': us, 
        'password': pw
      })
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then()
  //If response is not in json then in error
  .catch((error) => {
      //Error 
      console.error(error);
  })
  
   setTimeout( () => {
    var Http = new XMLHttpRequest();
    var url='http://localhost:3000/connexion';
    Http.open("GET", url);
   Http.send();

    Http.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
        console.log(Http.response);
        var json = JSON.parse(Http.response);
        console.log("json access before assignment "+json.access);
        log=json.access;
        if(String(log) === "false"){
          Unval = true;
        }
        upd(String(log), String(Unval));
      }
    }
    this.setState({isUnvalidated: String(log)})
    ;
   }
   , 350);
 
    e.preventDefault();
  }


  render() {
    
    return (<div>
      <form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }} onSubmit={this.handleSubmit}>
        <label>
          
          <input  style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, -50%)'
    }} placeholder="username" ref={(username) => this.username = username} /> <p></p>
          <input  placeholder="password" type="password" ref={(password) => {
                        this.password = password} 
          }
          />
        </label>
        <p></p>
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