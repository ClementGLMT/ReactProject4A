import React from 'react'
import Page1 from './pages/Page1.js'


export default class App extends React.Component{
  
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.isLoggedIn = false;
    this.state = {
      isLoggedIn: "false"
    }

  }

  onUpdate = (val) => {
    this.setState({
      isLoggedIn: val
    })
  };

render(){

  console.log("log in parent : "+this.state.isLoggedIn)
  return(
  <div>
    <Page1 isLoggedIn={this.state.isLoggedIn} onUpdate={this.onUpdate}/>
  </div>   
  )
  
  }

}


  


