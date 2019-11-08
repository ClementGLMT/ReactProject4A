/*eslint-disable no-unused-expressions */
import React from 'react'
var sha256 = require('js-sha256');

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
    alert(this.username.value);
    alert(sha256(this.password.value));
    fetch('http://localhost:3000/connexion', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-type':'application/json' },
      body :JSON.stringify({
        'username': this.username.value, 
        'password': sha256(this.password.value)
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
      /* fetch('http://localhost:3000/connexion', {
      method: 'GET',
      headers: {'Accept':'application.json'}
      //Request Type 
  })
  .then(response => {response.json()})
  //If response is in json then in success
  .then(responseJson => {
      //Success 
      alert("success "+responseJson);
        if(responseJson.access){
          window.location.href= '/App2';    
        }
  })
  //If response is not in json then in error
  .catch((error) => {
      //Error 
      console.error(error);
  })*/
   setTimeout( () => {
    var Http = new XMLHttpRequest();
    var url='http://localhost:3000/connexion';
    Http.open("GET", url);
   Http.send();

    Http.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
        console.log(Http.response);
        var json = JSON.parse(Http.response);
        //console.log(JSON.parse('{ "fruit": "pineapple", "fingers": 10 }'))
        console.log(Http.response);

        if(json.access){
          window.location.href= '/App2';    
        }
      }
    };
   }
   , 350);
    
    e.preventDefault();
  }


  render() {
    

    return (
      <form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }} onSubmit={this.handleSubmit}>
        <label>
          
          <input  style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, -50%)'
    }} placeholder="username" ref={(username) => this.username = username} /> <p></p>
          <input   placeholder="password" type="text" ref={(password) => {
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
    );
  }
}

export default NameForm;