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
    window.location.href= '/App2';    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
    })
    xhr.open('POST', 'https://example.com')
    xhr.send(JSON.stringify({ username: this.username.value, password: sha256(this.password.value)} ))

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