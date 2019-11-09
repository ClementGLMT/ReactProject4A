import React from 'react'
//import ndPage from './pages/2ndPage.js'
var sha256 = require('js-sha256');


//export default class App extends React.Component{
function App(){

var isLoggedIn = false;

  function NameForm(props){

    var username='';
    var password='';

    function handleSubmit() {
      console.log("username : "+username);
      console.log(sha256("passwd : "+String(password)));
      fetch('http://localhost:3000/connexion', {
        method: 'POST',
        headers: JSON.stringify({ "Accept": "application/json", "Content-type":"application/json" }),
        body :JSON.stringify({
          'username': username, 
          'password': sha256(String(password))
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
          //console.log(JSON.parse('{ "fruit": "pineapple", "fingers": 10 }'))
          console.log(Http.response);
          if(json.access){
            console.log("Access accepted");
              isLoggedIn = true;        
          }
        }
      };
     }
     , 350);
        }

    return (
    <form style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }} onSubmit={handleSubmit}>
      <label>
        
        <input  style={{
      position: 'absolute', left: '50%',
      transform: 'translate(-50%, -50%)'
  }} placeholder="username" ref={(usernam) => username= usernam} /> 
  <p></p>
        <input   placeholder="password" type="text" ref={(passwor) => password= passwor}
        />
      </label>
      <p></p>
      <p></p>
      <input style={{
      position: 'absolute', left: '50%',
      transform: 'translate(-50%, -50%)'
  }}type="submit" value="Submit" />
    </form>)

  }

  function NdPage(){
    return <p>BV champion</p>;
  }


function Page1(props){
  if(isLoggedIn){
    return <NdPage/>
  }
  else {
    return <NameForm user='' passwd='' />
  }
}
  return(
    <Page1 user='1' passwd='2'/>
  )
}

export default App;
  


//}